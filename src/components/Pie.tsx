import { Raya } from "./Raya";

export function Pie() {
  return (
    <footer id="pie">
      <div className="adentro pie">
        <div className="pie-marca">
          <img
            className="pie-logo hierve entra"
            src="/recursos/marca-blanca.webp"
            alt="Cuyo Tech Week"
            width={900}
            height={585}
            loading="lazy"
          />
        </div>
        <Raya delay="200ms" />
        <p className="letras">
          <span className="pie-nota">Las letras de esta página las dibujó la comunidad</span>
          <span className="l parral">CT_Parral</span>
          <span className="l zarcillo">CT_Zarcillo</span>
          <span className="l damajuana">CT_Damajuana</span>
          <span className="l acequia">CT_Acequia</span>
        </p>
      </div>
    </footer>
  );
}
