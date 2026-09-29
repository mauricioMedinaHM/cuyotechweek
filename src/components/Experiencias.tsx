import { animate, motion, useMotionValue } from "motion/react";
import { useEffect, useRef } from "react";
import { experienciaEndeavor } from "../data/contenido";
import { retraso } from "../lib/estilo";
import { Marcador } from "./Marcador";

const fotos = Array.from({ length: 14 }, (_, i) => `/recursos/retratos/${String(i + 1).padStart(2, "0")}.webp`);

function Cinta() {
  const grupo = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    let vivo = true;
    let recorrido: ReturnType<typeof animate> | undefined;

    const arrancar = () => {
      const lista = grupo.current;
      if (!lista || !vivo) return;
      const limite = lista.getBoundingClientRect().width;
      if (limite < 1) return;
      recorrido?.stop();
      x.set(0);
      recorrido = animate(x, [0, -limite], {
        duration: 48,
        ease: "linear",
        repeat: Infinity,
      });
    };

    arrancar();
    const observer = new ResizeObserver(arrancar);
    if (grupo.current) observer.observe(grupo.current);
    return () => {
      vivo = false;
      recorrido?.stop();
      observer.disconnect();
    };
  }, [x]);

  return (
    <div className="cinta" aria-hidden="true">
      <motion.div className="cinta-pista" style={{ x }}>
        {[0, 1].map((copia) => (
          <div className="cinta-grupo" key={copia} ref={copia === 0 ? grupo : undefined}>
            {fotos.map((src) => (
              <img key={`${copia}-${src}`} src={src} alt="" width={1000} height={1497} decoding="async" />
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function Experiencias() {
  return (
    <section id="experiencias">
      <div className="adentro experiencias-cuerpo">
        <img
          className="entra"
          src={experienciaEndeavor.logo}
          alt={experienciaEndeavor.titulo}
          style={retraso("100ms")}
        />
        <h2 className="titulo ancho hierve">
          <span className="linea entra" style={retraso("400ms")}>
            <Marcador delay={800}>{experienciaEndeavor.hashtag}</Marcador>
          </span>
        </h2>
        <p className="entra" style={retraso("240ms")}>
          {experienciaEndeavor.texto}
        </p>
      </div>
      <Cinta />
    </section>
  );
}
