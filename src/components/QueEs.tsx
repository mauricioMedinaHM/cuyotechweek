import { actores } from "../data/contenido";
import { retraso } from "../lib/estilo";
import { Raya } from "./Raya";

export function QueEs() {
  return (
    <section id="que-es">
      <div className="adentro">
        <div className="columnas ancha">
          <div>
            <p className="rotulo entra">Qué es</p>
            <h2 className="titulo ancho zarcillo hierve">
              <span className="linea entra" style={retraso("100ms")}>
                Tecnología, innovación y emprendimiento
              </span>
              <span className="linea entra" style={retraso("400ms")}>
                <b>conectando a todo Cuyo</b>
              </span>
            </h2>
            <Raya />
            <div className="espacio" />
            <p className="texto grande entra" style={retraso("600ms")}>
              Cuyo Tech Week nace para convertir a Mendoza en el punto de encuentro de la tecnología, la innovación y el
              emprendimiento de la región.
            </p>
            <p className="texto entra" style={retraso("800ms")}>
              Durante dos semanas, diferentes espacios de la provincia serán escenario de encuentros, workshops,
              experiencias, charlas, networking y actividades que reunirán a{" "}
              <b>
                startups, empresas, emprendedores, universidades, inversores, comunidades tecnológicas, organismos
                públicos y referentes del ecosistema
              </b>
              .
            </p>
          </div>
          <img
            className="foto foto-flotante aparece"
            style={retraso("500ms")}
            src="/recursos/foto-cordillera-mendoza.jpg?v=2"
            alt="Cordillera de los Andes en Mendoza, junto al Aconcagua"
            width={1800}
            height={1200}
            decoding="sync"
          />
        </div>
        <div className="espacio" />
        <ul className="actores">
          {actores.map((texto, i) => (
            <li key={texto} className="entra" style={retraso(`${900 + i * 70}ms`)}>
              {texto}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
