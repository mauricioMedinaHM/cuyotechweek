import { retraso } from "../lib/estilo";
import { Cajas } from "./Cajas";

export function Pie() {
  return (
    <footer id="pie">
      <div className="adentro">
        <div className="pie">
          <div>
            <img
              className="pie-logo hierve entra"
              src="/recursos/marca-blanca.png"
              alt="Cuyo Tech Week"
              width={900}
              height={585}
              loading="lazy"
            />
          </div>
          <div>
            <p className="pie-claim hierve entra" style={retraso("200ms")}>
              Una región. Dos semanas.
              <br />
              Todo el ecosistema <b>conectado.</b>
            </p>
            <Cajas items={["5 al 16 de octubre de 2026", "Mendoza, Argentina"]} desde={500} paso={200} clase="pie-datos" />
          </div>
        </div>
        <div className="pie-chica">
          <span>Cuyo Tech Week 2026</span>
          <span className="letras">
            Las letras de esta página las dibujó la comunidad: <span className="l parral">CT_Parral</span> ·{" "}
            <span className="l zarcillo">CT_Zarcillo</span> · <span className="l damajuana">CT_Damajuana</span> ·{" "}
            <span className="l acequia">CT_Acequia</span>
          </span>
          <span>
            Vive en{" "}
            <a href="https://pencilbox.site" rel="noopener">
              Pencilbox
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
