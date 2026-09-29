import { calendarioLuma } from "../data/contenido";
import { retraso } from "../lib/estilo";
import { Raya } from "./Raya";

export function Vivir() {
  return (
    <section className="vivir" id="vivir">
      <div className="vivir-copia">
        <h2 className="titulo ancho hierve">
          <span className="linea entra" style={retraso("100ms")}>
            Dos semanas para
          </span>
          <span className="linea entra" style={retraso("400ms")}>
            <b>vivir el ecosistema</b>
          </span>
        </h2>
        <Raya />
        <p className="texto grande entra" style={retraso("700ms")}>
          Del <b>5 al 16 de octubre</b>, Cuyo Tech Week desplegará actividades en diferentes puntos de Mendoza,
          combinando tecnología, negocios, talento, innovación y comunidad.
        </p>
      </div>
      <div className="vivir-recorte">
        <div className="ascii-marco hierve">
          <div className="luma">
            {calendarioLuma ? (
              <iframe
                src={calendarioLuma}
                title="Agenda de Cuyo Tech Week en Luma"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <p className="luma-espera">El calendario de Luma va acá.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
