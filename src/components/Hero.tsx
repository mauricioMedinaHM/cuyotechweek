import { Cajas } from "./Cajas";
import { Raya } from "./Raya";
import { retraso } from "../lib/estilo";

export function Hero() {
  return (
    <section className="hero activa" id="arriba">
      <div className="hero-montanas" aria-hidden="true" />
      <div className="adentro">
        <div className="logo-vivo" id="logoVivo" title="Cuyo Tech Week" role="img" aria-label="Cuyo Tech Week">
          <img id="logoCuadro" src="/recursos/logo-blanco/044.png" alt="" width={640} height={640} />
        </div>
        <div className="hero-copia">
          <h1 className="titulo hierve">
            <span className="linea entra" style={retraso("500ms")}>
              Una región.
            </span>
            <span className="linea entra" style={retraso("800ms")}>
              Dos semanas.
            </span>
            <span className="linea entra" style={retraso("1100ms")}>
              Todo el ecosistema <b>conectado.</b>
            </span>
          </h1>
          <Raya delay="1500ms" />
          <Cajas items={["Del 05 al 16 de octubre", "Mendoza"]} desde={1900} paso={300} />
        </div>
      </div>
    </section>
  );
}
