import comunidad from "../data/comunidad.txt?raw";
import { calendarioLuma } from "../data/contenido";
import { retraso } from "../lib/estilo";
import { Raya } from "./Raya";

export function Agenda() {
  return (
    <section id="agenda">
      <div className="adentro">
        <div className="columnas">
          <div>
            <p className="rotulo entra">La agenda</p>
            <h2 className="titulo damajuana hierve">
              <span className="linea entra" style={retraso("100ms")}>
                Una agenda
              </span>
              <span className="linea entra" style={retraso("400ms")}>
                <b>abierta y distribuida</b>
              </span>
            </h2>
            <Raya />
            <div className="espacio" />
            <p className="texto entra" style={retraso("600ms")}>
              Más que un evento centralizado, Cuyo Tech Week propone una <b>agenda abierta y distribuida</b>, construida
              junto a las organizaciones que ya están impulsando la innovación y la tecnología desde Mendoza y Cuyo.
            </p>
            <p className="texto entra" style={retraso("800ms")}>
              Cada comunidad y organización aporta su mirada, su espacio y sus experiencias para construir una agenda
              común, generar nuevas conexiones y darle mayor visibilidad a lo que está sucediendo en la región.
            </p>
          </div>
          <div>
            <div className="ascii-marco hierve">
              <div className="luma">
                {calendarioLuma ? (
                  <iframe
                    src={calendarioLuma}
                    title="Agenda de Cuyo Tech Week en Luma"
                    loading="lazy"
                    allowFullScreen
                  />
                ) : (
                  <p className="luma-espera">El calendario de Luma va acá.</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="ascii-banda">
          <pre className="ascii tipea" style={retraso("400ms")} aria-label="Una foto de la comunidad, en caracteres">{comunidad}</pre>
          <p className="ascii-pie entra" style={retraso("2800ms")}>
            La comunidad · 120 columnas
          </p>
        </div>
        <div className="espacio" />
        <div className="espacio" />
        <h2 className="titulo ancho hierve">
          <span className="linea entra" style={retraso("100ms")}>
            Dos semanas.
          </span>
          <span className="linea entra" style={retraso("400ms")}>
            Múltiples espacios.
          </span>
          <span className="linea entra" style={retraso("700ms")}>
            <b>Una misma comunidad conectada.</b>
          </span>
        </h2>
        <div className="espacio" />
        <p className="texto grande entra" style={retraso("900ms")}>
          Una oportunidad para encontrarnos, generar vínculos, compartir conocimiento y posicionar a Mendoza y a Cuyo
          como un ecosistema de <b>innovación, talento y tecnología con proyección nacional e internacional.</b>
        </p>
      </div>
    </section>
  );
}
