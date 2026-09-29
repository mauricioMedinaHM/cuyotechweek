import { useState } from "react";
import { retraso } from "../lib/estilo";
import { Marcador } from "./Marcador";

const vias = ["Participá", "Organizá una actividad", "Acompañá como sponsor"];

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
            {vias.map((via, i) => (
              <button
                key={via}
                type="button"
                className={i === activa ? "sumate-via prendida" : "sumate-via"}
                aria-pressed={i === activa}
                onMouseEnter={() => setActiva(i)}
                onFocus={() => setActiva(i)}
                onClick={() => setActiva(i)}
              >
                <span>{via}</span>
                <span className="sumate-flecha" aria-hidden="true">
                  <svg viewBox="0 0 64 16" width="64" height="16">
                    <path d="M0 8 H58 M50 2 L58 8 L50 14" />
                  </svg>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
