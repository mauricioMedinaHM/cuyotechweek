import { useEffect, useRef } from "react";

const trazos = [
{ largo: 452.1, dur: "0.183s", espera: "0.043s", d: "M 245.0 25.0 L 250.0 30.0 L 242.0 22.0 L 225.0 18.0 L 196.0 25.0 L 163.0 53.0 L 143.0 83.0 L 123.0 143.0 L 117.0 174.0 L 110.0 232.0 L 109.0 281.0 L 95.0 294.0 L 83.0 342.0 L 66.0 374.0" },
  { largo: 31.8, dur: "0.080s", espera: "0.226s", d: "M 109.0 281.0 L 125.0 292.0 L 128.0 304.0" },
  { largo: 274.9, dur: "0.111s", espera: "0.281s", d: "M 128.0 304.0 L 143.0 336.0 L 157.0 352.0 L 176.0 356.0 L 194.0 350.0 L 230.0 314.0 L 253.0 304.0 L 260.0 242.0 L 271.0 202.0" },
  { largo: 100.7, dur: "0.080s", espera: "0.392s", d: "M 249.0 306.0 L 253.0 304.0 L 259.0 310.0 L 264.0 331.0 L 281.0 355.0 L 295.0 359.0 L 311.0 355.0 L 315.0 351.0" },
  { largo: 53.5, dur: "0.080s", espera: "0.446s", d: "M 348.0 311.0 L 330.0 324.0 L 325.0 338.0 L 315.0 351.0" },
  { largo: 121.5, dur: "0.080s", espera: "0.500s", d: "M 355.0 212.0 L 348.0 312.0 L 363.0 327.0" },
  { largo: 173.2, dur: "0.080s", espera: "0.555s", d: "M 450.0 208.0 L 441.0 232.0 L 417.0 250.0 L 413.0 289.0 L 399.0 324.0 L 379.0 335.0 L 363.0 327.0" },
  { largo: 62.4, dur: "0.080s", espera: "0.626s", d: "M 440.0 233.0 L 452.0 245.0 L 458.0 290.0" },
  { largo: 66.3, dur: "0.080s", espera: "0.680s", d: "M 458.0 290.0 L 463.0 300.0 L 474.0 304.0 L 513.0 285.0" },
  { largo: 226.6, dur: "0.092s", espera: "0.734s", d: "M 524.0 186.0 L 513.0 285.0 L 522.0 293.0 L 523.0 309.0 L 527.0 317.0 L 526.0 373.0 L 522.0 398.0 L 515.0 403.0" },
  { largo: 46.6, dur: "0.080s", espera: "0.825s", d: "M 527.0 317.0 L 557.0 309.0 L 568.0 298.0" },
  { largo: 50.0, dur: "0.080s", espera: "0.879s", d: "M 568.0 298.0 L 581.0 281.0 L 607.0 269.0" },
  { largo: 381.9, dur: "0.155s", espera: "0.934s", d: "M 690.0 306.0 L 702.0 278.0 L 701.0 249.0 L 691.0 209.0 L 686.0 204.0 L 662.0 204.0 L 645.0 199.0 L 615.0 210.0 L 607.0 251.0 L 607.0 270.0 L 612.0 275.0 L 618.0 310.0 L 627.0 328.0 L 642.0 335.0 L 664.0 332.0 L 691.0 305.0" },
  { largo: 116.3, dur: "0.080s", espera: "1.089s", d: "M 686.0 204.0 L 696.0 197.0 L 729.0 190.0 L 790.0 155.0" },
  { largo: 68.3, dur: "0.080s", espera: "0.681s", d: "M 8.0 401.0 L 23.0 402.0 L 44.0 395.0 L 54.0 390.0 L 66.0 374.0" },
  { largo: 45.1, dur: "0.080s", espera: "0.735s", d: "M 114.0 449.0 L 133.0 446.0 L 136.0 449.0 L 146.0 449.0 L 156.0 443.0" },
  { largo: 67.9, dur: "0.080s", espera: "0.790s", d: "M 129.0 466.0 L 123.0 486.0 L 126.0 509.0 L 141.0 519.0 L 146.0 516.0" },
  { largo: 43.9, dur: "0.080s", espera: "0.844s", d: "M 142.0 532.0 L 135.0 559.0 L 135.0 575.0" },
  { largo: 49.0, dur: "0.080s", espera: "0.898s", d: "M 138.0 412.0 L 153.0 415.0 L 163.0 424.0 L 156.0 443.0" },
  { largo: 211.8, dur: "0.086s", espera: "0.952s", d: "M 193.0 533.0 L 167.0 538.0 L 143.0 532.0 L 143.0 519.0 L 166.0 478.0 L 188.0 460.0 L 198.0 456.0 L 215.0 456.0 L 227.0 471.0 L 230.0 496.0" },
  { largo: 150.2, dur: "0.080s", espera: "1.038s", d: "M 193.0 533.0 L 212.0 521.0 L 231.0 495.0 L 256.0 495.0 L 260.0 477.0 L 267.0 468.0 L 274.0 466.0 L 297.0 471.0 L 304.0 464.0" },
  { largo: 100.9, dur: "0.080s", espera: "1.099s", d: "M 257.0 494.0 L 265.0 506.0 L 279.0 506.0 L 296.0 484.0 L 296.0 471.0 L 304.0 465.0 L 316.0 447.0" },
  { largo: 88.5, dur: "0.080s", espera: "1.153s", d: "M 296.0 483.0 L 312.0 501.0 L 323.0 503.0 L 354.0 489.0 L 363.0 472.0" },
  { largo: 27.4, dur: "0.080s", espera: "1.208s", d: "M 316.0 447.0 L 330.0 440.0 L 341.0 444.0" },
  { largo: 97.4, dur: "0.080s", espera: "1.262s", d: "M 385.0 411.0 L 379.0 445.0 L 383.0 453.0 L 381.0 459.0 L 389.0 467.0 L 390.0 493.0 L 395.0 502.0" },
  { largo: 93.1, dur: "0.080s", espera: "1.316s", d: "M 443.0 446.0 L 440.0 471.0 L 431.0 496.0 L 421.0 506.0 L 413.0 508.0 L 395.0 502.0" },
  { largo: 163.8, dur: "0.080s", espera: "1.060s", d: "M 515.0 403.0 L 498.0 413.0 L 492.0 438.0 L 493.0 459.0 L 507.0 466.0 L 513.0 465.0 L 524.0 458.0 L 529.0 444.0 L 530.0 409.0 L 521.0 400.0" },
  { largo: 202.6, dur: "0.082s", espera: "1.127s", d: "M 581.0 423.0 L 585.0 405.0 L 590.0 399.0 L 601.0 394.0 L 606.0 398.0 L 601.0 484.0 L 603.0 511.0 L 606.0 520.0 L 617.0 526.0 L 626.0 524.0 L 635.0 514.0" },
  { largo: 60.9, dur: "0.080s", espera: "1.208s", d: "M 643.0 456.0 L 640.0 511.0 L 635.0 514.0" },
  { largo: 66.6, dur: "0.080s", espera: "1.263s", d: "M 673.0 471.0 L 673.0 488.0 L 666.0 508.0 L 658.0 513.0 L 639.0 512.0" },
  { largo: 118.0, dur: "0.080s", espera: "1.317s", d: "M 727.0 407.0 L 669.0 413.0 L 666.0 416.0 L 673.0 471.0" },
  { largo: 73.4, dur: "0.080s", espera: "1.371s", d: "M 715.0 473.0 L 705.0 491.0 L 708.0 510.0 L 720.0 515.0 L 739.0 507.0" },
  { largo: 58.3, dur: "0.080s", espera: "1.425s", d: "M 769.0 464.0 L 760.0 480.0 L 759.0 498.0 L 739.0 507.0" },
  { largo: 33.4, dur: "0.080s", espera: "1.480s", d: "M 759.0 497.0 L 768.0 505.0 L 789.0 501.0" },
  { largo: 45.8, dur: "0.080s", espera: "1.534s", d: "M 789.0 501.0 L 813.0 492.0 L 817.0 486.0 L 829.0 481.0" },
  { largo: 55.6, dur: "0.080s", espera: "1.588s", d: "M 834.0 408.0 L 828.0 454.0 L 834.0 461.0" },
  { largo: 49.4, dur: "0.080s", espera: "1.642s", d: "M 837.0 459.0 L 832.0 463.0 L 829.0 481.0 L 846.0 499.0" },
  { largo: 63.8, dur: "0.080s", espera: "1.696s", d: "M 846.0 499.0 L 857.0 506.0 L 871.0 504.0 L 883.0 491.0 L 889.0 473.0" },
];

function puntos(d: string) {
  const nums = [...d.matchAll(/-?\d+(?:\.\d+)?/g)].map((m) => Number(m[0]));
  const lista: { x: number; y: number }[] = [];
  for (let i = 0; i < nums.length; i += 2) lista.push({ x: nums[i], y: nums[i + 1] });
  return lista;
}

function guion() {
  const datos = trazos.map((trazo) => {
    const lista = puntos(trazo.d);
    const minY = Math.min(...lista.map((p) => p.y));
    const x = lista.reduce((suma, p) => suma + p.x, 0) / lista.length;
    return { minY, x };
  });
  const ordenar = (indices: number[]) => indices.sort((a, b) => datos[a].x - datos[b].x);
  const cuyo = ordenar(datos.map((_, i) => i).filter((i) => datos[i].minY < 340));
  const abajo = datos.map((_, i) => i).filter((i) => datos[i].minY >= 340);
  const tech = ordenar(abajo.filter((i) => datos[i].x < 480));
  const week = ordenar(abajo.filter((i) => datos[i].x >= 480));

  const espera = trazos.map(() => 0);
  const dur = trazos.map(() => 0.3);
  const correr = (indices: number[], desde: number) => {
    let t = desde;
    for (const i of indices) {
      const paso = Math.min(0.46, Math.max(0.2, trazos[i].largo / 980));
      espera[i] = t;
      dur[i] = paso;
      t += paso * 0.52;
    }
    return t;
  };

  let t = 0.15;
  t = correr(cuyo, t) + 0.2;
  t = correr(tech, t) + 0.12;
  t = correr(week, t);
  return { espera, dur, fin: t };
}

const tiempos = guion();

export function LogoEscrito() {
  const svg = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const nodo = svg.current;
    if (!nodo) return;
    const paths = [...nodo.querySelectorAll<SVGPathElement>(".logo-trazo")];
    const piezas = paths.map((path, i) => {
      path.style.strokeDasharray = "100%";
      path.style.strokeDashoffset = "100%";
      return { path, dur: tiempos.dur[i], espera: tiempos.espera[i] };
    });
    nodo.classList.add("en-marcha");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      piezas.forEach((p) => {
        p.path.style.strokeDashoffset = "0%";
      });
      return;
    }

    const inicio = performance.now();
    let frame = 0;
    const dibujar = (ahora: number) => {
      const t = (ahora - inicio) / 1000;
      let sigue = false;
      for (const p of piezas) {
        const avance = Math.min(1, Math.max(0, (t - p.espera) / p.dur));
        p.path.style.strokeDashoffset = `${(1 - avance) * 100}%`;
        if (avance < 1) sigue = true;
      }
      if (sigue) frame = requestAnimationFrame(dibujar);
    };
    frame = requestAnimationFrame(dibujar);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <svg ref={svg} className="logo-escrito" viewBox="0 0 900 585" aria-hidden="true">
      <defs>
        <mask id="logo-escritura" maskUnits="userSpaceOnUse" x="0" y="0" width="900" height="585">
          {trazos.map((trazo, i) => (
            <path key={i} className="logo-trazo" d={trazo.d} />
          ))}
        </mask>
      </defs>
      <image href="/recursos/marca-blanca.webp" width="900" height="585" mask="url(#logo-escritura)" />
    </svg>
  );
}
