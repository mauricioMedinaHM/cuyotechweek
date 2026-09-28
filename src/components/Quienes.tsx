import { useEffect, useState } from "react";
import { acompanan, organizan } from "../data/contenido";
import { retraso } from "../lib/estilo";

const trazos = [
  ["M2 9 C 18 2, 36 18, 58 7 S 80 3, 98 11", "M2 21 C 22 14, 40 28, 62 18 S 82 15, 98 22"],
  ["M3 12 C 14 3, 24 20, 38 9 S 58 2, 72 13 S 88 22, 98 8", "M3 23 C 18 16, 32 30, 50 20 S 74 12, 98 23"],
  ["M2 8 L 16 15 L 30 5 L 46 16 L 60 6 L 76 15 L 98 8", "M2 19 L 18 26 L 34 16 L 50 26 L 66 16 L 82 25 L 98 18"],
  ["M4 6 C 18 15, 28 3, 44 13 S 66 20, 82 7 S 92 3, 98 12", "M3 18 C 20 26, 36 13, 54 23 S 78 28, 98 16"],
  ["M2 11 C 26 2, 42 20, 66 8 C 78 3, 88 15, 98 9", "M2 22 C 22 15, 46 29, 68 18 C 80 14, 90 23, 98 19"],
  ["M3 7 C 14 17, 26 2, 40 13 C 52 23, 64 4, 78 14 C 88 20, 93 8, 98 12", "M3 20 C 16 27, 30 14, 46 23 C 60 30, 72 16, 86 24 C 93 27, 96 19, 98 21"],
];

function mezcla(paso: number, total: number) {
  const t = total <= 1 ? 1 : paso / (total - 1);
  const r = Math.round(255 * (1 - t));
  const b = Math.round(255 + (150 - 255) * t);
  return `rgb(${r}, 255, ${b})`;
}

function Corte({ paso, total, cuadro }: { paso: number; total: number; cuadro: number }) {
  const [arriba, abajo] = trazos[(paso + cuadro) % trazos.length];
  return (
    <svg className="corte" viewBox="0 0 100 32" aria-hidden="true" style={{ color: mezcla(paso, total) }}>
      <path d={arriba} />
      <path d={abajo} />
    </svg>
  );
}

function Nombres({
  items,
  desde,
  clase,
  cuadro,
}: {
  items: string[];
  desde: number;
  clase: string;
  cuadro: number;
}) {
  const cortes = items.length - 1;
  return (
    <p className={`nombres ${clase}`}>
      {items.map((texto, i) => (
        <span key={texto} className="entra" style={retraso(`${desde + i * 70}ms`)}>
          {i > 0 && <Corte paso={i - 1} total={cortes} cuadro={cuadro} />}
          {texto}
        </span>
      ))}
    </p>
  );
}

export function Quienes() {
  const [cuadro, setCuadro] = useState(0);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let vivo = true;
    let id = 0;
    let anterior = 0;
    const tick = (ahora: number) => {
      if (!vivo) return;
      id = requestAnimationFrame(tick);
      if (ahora - anterior < 1000 / 8) return;
      anterior = ahora;
      setCuadro((n) => (n + 1) % trazos.length);
    };
    id = requestAnimationFrame(tick);
    return () => {
      vivo = false;
      cancelAnimationFrame(id);
    };
  }, []);

  return (
    <section id="quienes">
      <div className="adentro">
        <div className="quienes">
          <div>
            <p className="rotulo entra">Quiénes la hacen</p>
            <h2 className="hierve entra" style={retraso("100ms")}>
              Organizan
            </h2>
            <Nombres items={organizan} desde={300} clase="damajuana" cuadro={cuadro} />
            <div className="espacio" />
            <h2 className="zarcillo hierve entra" style={retraso("1100ms")}>
              Acompañan
            </h2>
            <Nombres items={acompanan} desde={1300} clase="damajuana claro" cuadro={cuadro} />
          </div>
          <img
            className="foto foto-flotante aparece"
            style={retraso("500ms")}
            src="/recursos/foto-taller-manuel-leiva.jpg"
            alt=""
            width={1600}
            height={1320}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
