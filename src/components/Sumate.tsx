import { useState } from "react";
import { retraso } from "../lib/estilo";
import { Marcador } from "./Marcador";

const vias: { nombre: string; href?: string }[] = [
  { nombre: "Participá", href: "https://calendario-tech.vercel.app/" },
  {
    nombre: "Organizá una actividad",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSdBALewhPeX5QMzTozEE7gF0p2tUt6-kBCwCslS_MMbGMVm7g/viewform",
  },
  {
    nombre: "Acompañá como sponsor",
    href: "mailto:mendozatech@gmail.com?subject=Acompañá%20como%20sponsor%20—%20Cuyo%20Tech%20Week",
  },
];

export function Sumate() {
  const [activa, setActiva] = useState(0);

  return (
    <section className="sumate" id="sumate">
      <div className="adentro">
        <div className="sumate-cuerpo">
          <div>
            <h2 className="titulo ancho hierve">
              <span className="linea entra" style={retraso("100ms")}>
                sumate a
              </span>
              <span className="linea entra" style={retraso("400ms")}>
                <Marcador delay={800}>#CuyoTechWeek</Marcador>
              </span>
            </h2>
            <p className="texto grande entra" style={retraso("700ms")}>
              Ser parte de Cuyo Tech Week es una oportunidad para{" "}
              <b>
                posicionar tu marca, generar conexiones, acercarte al talento, mostrar lo que estás construyendo y
                formar parte de una comunidad que impulsa el desarrollo tecnológico y emprendedor de la región.
              </b>
            </p>
          </div>
          <div className="sumate-vias" role="group" aria-label="Cómo sumarte">
            {vias.map((via, i) => {
              const clase = i === activa ? "sumate-via prendida" : "sumate-via";
              const cuerpo = (
                <>
                  <span>{via.nombre}</span>
                  <span className="sumate-flecha" aria-hidden="true">
                    <svg viewBox="0 0 64 16" width="64" height="16">
                      <path d="M0 8 H58 M50 2 L58 8 L50 14" />
                    </svg>
                  </span>
                </>
              );
              if (via.href) {
                return (
                  <a
                    key={via.nombre}
                    className={clase}
                    href={via.href}
                    onMouseEnter={() => setActiva(i)}
                    onFocus={() => setActiva(i)}
                  >
                    {cuerpo}
                  </a>
                );
              }
              return (
                <button
                  key={via.nombre}
                  type="button"
                  className={clase}
                  aria-pressed={i === activa}
                  onMouseEnter={() => setActiva(i)}
                  onFocus={() => setActiva(i)}
                  onClick={() => setActiva(i)}
                >
                  {cuerpo}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
