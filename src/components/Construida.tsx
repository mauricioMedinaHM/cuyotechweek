import { retraso } from "../lib/estilo";
import { Raya } from "./Raya";

export function Construida() {
  return (
    <section id="construida">
      <div className="adentro">
        <p className="rotulo entra">Una plataforma abierta</p>
        <h2 className="titulo ancho zarcillo hierve">
          <span className="linea entra" style={retraso("100ms")}>
            Una agenda construida
          </span>
          <span className="linea entra" style={retraso("400ms")}>
            <b>por el ecosistema</b>
          </span>
        </h2>
        <Raya />
        <div className="espacio" />
        <p className="texto grande entra" style={retraso("600ms")}>
          Cuyo Tech Week es una plataforma abierta a{" "}
          <b>empresas, startups, instituciones, comunidades, universidades, emprendedores y organizaciones</b> que
          quieran ser protagonistas.
        </p>
      </div>
    </section>
  );
}
