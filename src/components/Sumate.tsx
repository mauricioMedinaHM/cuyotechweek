import { retraso } from "../lib/estilo";
import { Cajas } from "./Cajas";

export function Sumate() {
  return (
    <section className="verde sumate" id="sumate">
      <div className="adentro">
        <h2 className="titulo ancho acequia hierve">
          <span className="linea entra" style={retraso("100ms")}>
            sumate a
          </span>
          <span className="linea entra" style={retraso("400ms")}>
            <b>cuyo tech week 2026</b>
          </span>
        </h2>
        <Cajas items={["Participá", "Organizá una actividad", "Acompañá como sponsor"]} desde={700} paso={200} grandes />
        <p className="texto grande entra" style={retraso("1200ms")}>
          Ser parte de Cuyo Tech Week es una oportunidad para{" "}
          <b>
            posicionar tu marca, generar conexiones, acercarte al talento, mostrar lo que estás construyendo y formar
            parte de una comunidad que impulsa el desarrollo tecnológico y emprendedor de la región.
          </b>
        </p>
      </div>
    </section>
  );
}
