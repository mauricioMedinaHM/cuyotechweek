import { experiencias } from "../data/contenido";
import { retraso } from "../lib/estilo";
import { Marcador } from "./Marcador";

export function Experiencias() {
  return (
    <section id="experiencias">
      <div className="adentro experiencias-cuerpo">
        <h2 className="titulo ancho hierve">
          <span className="linea entra" style={retraso("100ms")}>
            Algunas de las experiencias
          </span>
          <span className="linea entra" style={retraso("400ms")}>
            <Marcador delay={800}>#CuyoTechWeek</Marcador>
          </span>
        </h2>
        <ul className="experiencias-lista">
          {experiencias.map((exp) => (
            <li key={exp.titulo}>
              <h3>{exp.titulo}</h3>
              <p>{exp.texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
