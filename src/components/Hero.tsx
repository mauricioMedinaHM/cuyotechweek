import { LogoEscrito } from "./LogoEscrito";
import { retraso } from "../lib/estilo";

export function Hero() {
  return (
    <section className="hero activa" id="arriba">
      <div className="hero-montanas" aria-hidden="true" />
      <div className="adentro">
        <div className="logo-vivo" id="logoVivo" title="Cuyo Tech Week" role="img" aria-label="Cuyo Tech Week">
          <LogoEscrito />
        </div>
        <div className="hero-copia">
          <p className="hero-fecha entra" style={retraso("400ms")}>
            <svg className="hero-cal" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3.5" y="5" width="17" height="15.5" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
              <path d="M3.5 10h17M8 3.2v3.6M16 3.2v3.6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            5-16 de octubre
          </p>
        </div>
      </div>
    </section>
  );
}
