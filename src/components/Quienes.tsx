import { acompanan, organizan, type Marca } from "../data/contenido";
import { retraso } from "../lib/estilo";

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
    </section>
  );
}
