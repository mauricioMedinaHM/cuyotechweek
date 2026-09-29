import { useEffect, useId, useRef, useState } from "react";

function cerda(i: number, semilla: number) {
  const s = Math.sin(i * 12.9898 + semilla) * 43758.5453;
  return s - Math.floor(s) - 0.5;
}

function barraPintada(ancho: number, alto: number) {
  const pasos = 16;
  const x0 = ancho * 0.01;
  const x1 = ancho * 0.99;
  const arriba = alto * 0.12;
  const abajo = alto * 0.88;
  const mella = alto * 0.07;
  const puntos: string[] = [];

  for (let i = 0; i <= pasos; i++) {
    const t = i / pasos;
    const x = x0 + (x1 - x0) * t;
    const y = arriba + cerda(i, 1.4) * mella;
    puntos.push(`${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`);
  }
  puntos.push(`L${(x1 + cerda(3, 2.2) * mella * 0.35).toFixed(1)} ${abajo.toFixed(1)}`);
  for (let i = pasos; i >= 0; i--) {
    const t = i / pasos;
    const x = x0 + (x1 - x0) * t;
    const y = abajo + cerda(i, 5.1) * mella;
    puntos.push(`L${x.toFixed(1)} ${y.toFixed(1)}`);
  }
  puntos.push("Z");
  return puntos.join(" ");
}

export function Marcador({ children, delay = 650 }: { children: string; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [caja, setCaja] = useState({ w: 0, h: 0 });
  const filtro = `pincel-${useId().replace(/:/g, "")}`;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const medir = () => {
      const { width, height } = el.getBoundingClientRect();
      if (width < 2 || height < 2) return;
      setCaja({ w: width, h: height });
    };
    medir();
    const obs = new ResizeObserver(medir);
    obs.observe(el);
    return () => obs.disconnect();
  }, [children]);

  return (
    <span ref={ref} className="marcador" style={{ ["--pincel-d" as string]: `${delay}ms` }}>
      {caja.w > 0 && (
        <svg className="marcador-pincel" viewBox={`0 0 ${caja.w} ${caja.h}`} aria-hidden="true">
          <defs>
            <filter id={filtro} x="-6%" y="-18%" width="112%" height="136%" colorInterpolationFilters="sRGB">
              <feTurbulence type="fractalNoise" baseFrequency="0.045 0.55" numOctaves="2" seed="3" result="ruido" />
              <feDisplacementMap in="SourceGraphic" in2="ruido" scale="3.4" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </defs>
          <path d={barraPintada(caja.w, caja.h)} filter={`url(#${filtro})`} />
        </svg>
      )}
      {children}
    </span>
  );
}
