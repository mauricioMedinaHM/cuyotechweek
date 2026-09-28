import { experiencias } from "../data/contenido";
import { retraso } from "../lib/estilo";

export function Experiencias() {
  return (
    <section id="experiencias">
      <img
        className="garabato garabato-monoculo hierve aparece"
        style={retraso("300ms")}
        src="/recursos/CTW_ILUSTRACION_MONOCULO-verde.png"
        alt=""
        width={800}
        height={1176}
        loading="lazy"
      />
      <div className="adentro">
        <p className="rotulo entra">Del 5 al 16 de octubre · Mendoza</p>
        <h2 className="titulo ancho damajuana hierve">
          <span className="linea entra" style={retraso("100ms")}>
            Algunas de las experiencias
          </span>
          <span className="linea entra" style={retraso("400ms")}>
            <b>de Cuyo Tech Week</b>
          </span>
        </h2>
        <div className="espacio" />
        <div className="espacio" />
        <div className="experiencias">
          {experiencias.map((exp, i) => (
            <article key={exp.numero} className="exp hierve dibuja" style={retraso(`${200 + i * 150}ms`)}>
              <p className="exp-numero">{exp.numero}</p>
              <h3>{exp.titulo}</h3>
              <p>{exp.texto}</p>
            </article>
          ))}
        </div>
      </div>
      <img
        className="garabato garabato-cuernos hierve aparece"
        style={retraso("600ms")}
        src="/recursos/CTW_ILUSTRACION_CUERNOS-verde.png"
        alt=""
        width={1400}
        height={606}
        loading="lazy"
      />
    </section>
  );
}
