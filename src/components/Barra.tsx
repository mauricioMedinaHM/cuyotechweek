export function Barra() {
  return (
    <header className="barra">
      <a className="barra-marca" href="#arriba" aria-label="Cuyo Tech Week">
        <img id="barraCuadro" src="/recursos/logo-blanco/036.png" alt="Cuyo Tech Week" width={640} height={640} />
      </a>
      <span className="barra-dato">5 al 16 de octubre de 2026 · Mendoza</span>
      <a className="barra-boton hierve" href="#sumate">
        Sumate
      </a>
    </header>
  );
}
