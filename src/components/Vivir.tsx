import { ejes } from "../data/contenido";
import { retraso } from "../lib/estilo";
import { Cajas } from "./Cajas";
import { Raya } from "./Raya";

export function Vivir() {
  return (
    <section className="verde" id="vivir">
      <div className="adentro">
        <div className="columnas ancha">
          <div>
            <p className="rotulo entra">Del 5 al 16 de octubre</p>
            <h2 className="titulo ancho zarcillo hierve">
              <span className="linea entra" style={retraso("100ms")}>
                Dos semanas para
              </span>
              <span className="linea entra" style={retraso("400ms")}>
                <b>vivir el ecosistema</b>
              </span>
            </h2>
            <Raya />
            <div className="espacio" />
            <p className="texto grande entra" style={retraso("600ms")}>
              Del <b>5 al 16 de octubre</b>, Cuyo Tech Week desplegará actividades en diferentes puntos de Mendoza,
              combinando tecnología, negocios, talento, innovación y comunidad.
            </p>
            <div className="espacio" />
            <Cajas items={ejes} />
          </div>
          <img
            className="foto foto-flotante aparece"
            style={retraso("500ms")}
            src="/recursos/foto-collage-montanas.jpg"
            alt=""
            width={1920}
            height={1805}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
