import { acompanan, organizan, type Marca } from "../data/contenido";
import { retraso } from "../lib/estilo";
import { Raya } from "./Raya";

const compactas = new Set(["Polo TIC Mendoza", "CuyoConnect", "Andes Tech", "Underc0de", "Campus Olegario"]);
const apiladas = new Set(["CuyoConnect"]);
const anchas = new Set(["Endeavor"]);
const medias = new Set(["Dirección de Emprendedores y Cooperativas"]);

function Muro({ titulo, items, desde }: { titulo: string; items: Marca[]; desde: number }) {
  return (
    <div className="muro">
      <h2 className="entra" style={retraso(`${desde}ms`)}>
        {titulo}
      </h2>
      <ul>
        {items.map((item, i) => {
          const apilada = apiladas.has(item.nombre);
          const cuerpo = item.logo ? (
            apilada ? (
              <>
                <img src={item.logo} alt="" />
                <span>{item.nombre}</span>
              </>
            ) : (
              <img src={item.logo} alt={item.nombre} />
            )
          ) : (
            item.nombre
          );
          const clase = [
            "entra",
            item.logo && compactas.has(item.nombre) ? "marca-compacta" : "",
            item.logo && anchas.has(item.nombre) ? "marca-ancha" : "",
            item.logo && medias.has(item.nombre) ? "marca-media" : "",
            apilada ? "marca-apilada" : "",
          ]
            .filter(Boolean)
            .join(" ");
          return (
            <li key={item.nombre} className={clase} style={retraso(`${desde + 120 + i * 40}ms`)}>
              {item.href ? <a href={item.href}>{cuerpo}</a> : cuerpo}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function Quienes() {
  return (
    <section id="quienes">
      <div className="adentro quienes-muro">
        <Muro titulo="Organizan" items={organizan} desde={100} />
        <Muro titulo="Acompañan" items={acompanan} desde={400} />
      </div>
      <div className="finde-corte">
        <Raya delay="560ms" />
      </div>
      <div className="finde">
        <h2 className="entra" style={retraso("700ms")}>
          Cuyo Tech Weekend
        </h2>
        <p className="entra" style={retraso("820ms")}>
          Picnic en tres bodegas de Luján de Cuyo: quesos, empanadas y tres copas de vino.
        </p>
        <ul className="finde-horas entra" style={retraso("920ms")}>
          <li>
            <time>10:30</time> Tierras Altas
          </li>
          <li>
            <time>11:15</time> Terrazas
          </li>
          <li>
            <time>12:00</time> Penedo Borges
          </li>
        </ul>
        <a
          className="barra-boton entra"
          href="https://winepass.com.ar/experiences/332-cuyo-tech-weekend"
          target="_blank"
          rel="noopener noreferrer"
          style={retraso("1040ms")}
        >
          Reservá en Winepass
        </a>
      </div>
      <div className="finde-corte">
        <Raya delay="640ms" />
      </div>
    </section>
  );
}
