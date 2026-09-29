import { useEffect, useState } from "react";

export function Barra() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("arriba");
    if (!hero) return;
    const observador = new IntersectionObserver(
      ([entrada]) => setVisible(entrada.intersectionRatio < 0.35),
      { threshold: [0, 0.35, 1] },
    );
    observador.observe(hero);
    return () => observador.disconnect();
  }, []);

  return (
    <header className={visible ? "barra visible" : "barra"} inert={!visible}>
      <a className="barra-marca" href="#arriba" aria-label="Cuyo Tech Week">
        <img src="/recursos/marca-blanca.webp" alt="Cuyo Tech Week" width={900} height={585} />
      </a>
      <a className="barra-boton hierve" href="#sumate">
        Sumate
      </a>
    </header>
  );
}
