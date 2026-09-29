import { useEffect, useState } from "react";
import { retraso } from "../lib/estilo";
import { Raya } from "./Raya";

const retratos = Array.from({ length: 14 }, (_, i) => `/recursos/retratos/${String(i + 1).padStart(2, "0")}.webp`);
const fuentesCuyo = ["parral-gruesa", "parral", "zarcillo", "damajuana", "acequia"];

function TodoCuyo() {
  const [fuente, setFuente] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setFuente((n) => (n + 1) % fuentesCuyo.length), 180);
    return () => window.clearInterval(id);
  }, []);

  return (
    <>
      {fuentesCuyo.map((nombre, i) => (
        <b
          key={nombre}
          className={`fuente-viva ${nombre}${i === fuente ? " activa" : ""}`}
          aria-hidden={i === fuente ? undefined : true}
        >
          todo Cuyo
        </b>
      ))}
    </>
  );
}

function Retratos() {
  const [activa, setActiva] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setActiva((n) => (n + 1) % retratos.length), 180);
    return () => window.clearInterval(id);
  }, []);

  return (
    <figure className="retratos" aria-hidden="true">
      {retratos.map((src, i) => (
        <img key={src} src={src} alt="" className={i === activa ? "activa" : ""} />
      ))}
    </figure>
  );
}

export function QueEs() {
  return (
    <section id="que-es">
      <div className="adentro">
        <div className="columnas ancha">
          <div>
            <h2 className="titulo ancho hierve">
              <span className="linea entra" style={retraso("100ms")}>
                Tecnología e innovación.
              </span>
              <span className="linea entra" style={retraso("400ms")}>
                Conectando a
              </span>
              <span className="linea linea-cuyo entra" style={retraso("550ms")}>
                <TodoCuyo />
              </span>
            </h2>
            <Raya />
            <div className="espacio" />
            <p className="texto grande entra" style={retraso("600ms")}>
              Cuyo Tech Week nace para convertir a Mendoza en el punto de encuentro de la tecnología, la innovación y el
              emprendimiento de la región.
            </p>
          </div>
          <Retratos />
        </div>
      </div>
    </section>
  );
}
