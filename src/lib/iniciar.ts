import { cuadrosLogo } from "../data/contenido";

export function iniciarLanding() {
  let vivo = true;
  let cuadroHeader = 0;

  const secciones = document.querySelectorAll("section, footer");
  const io = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (!entrada.isIntersecting) return;
        entrada.target.classList.add("activa");
        io.unobserve(entrada.target);
      });
    },
    { threshold: 0.18 },
  );
  secciones.forEach((seccion) => io.observe(seccion));

  document.querySelectorAll<SVGPathElement>(".raya path").forEach((trazo) => {
    const largo = Math.ceil(trazo.getTotalLength());
    trazo.style.setProperty("--largo", String(largo));
    trazo.style.strokeDasharray = String(largo);
  });

  const img = document.getElementById("logoCuadro") as HTMLImageElement | null;
  const caja = document.getElementById("logoVivo");
  const barra = document.getElementById("barraCuadro") as HTMLImageElement | null;
  const precargados = cuadrosLogo.map((src) => {
    const imagen = new Image();
    imagen.src = src;
    return imagen;
  });

  let t0 = 0;
  let corriendo = false;
  const reducido = matchMedia("(prefers-reduced-motion: reduce)").matches;

  function escribir() {
    if (!vivo || corriendo || reducido || !img) return;
    corriendo = true;
    t0 = performance.now();
    const paso = (ahora: number) => {
      if (!vivo) return;
      const n = Math.max(0, Math.min(cuadrosLogo.length - 1, Math.floor((ahora - t0) / (1000 / 15))));
      img.src = cuadrosLogo[n];
      if (n < cuadrosLogo.length - 1) requestAnimationFrame(paso);
      else corriendo = false;
    };
    requestAnimationFrame(paso);
  }

  Promise.all(precargados.map((imagen) => imagen.decode().catch(() => {}))).then(() => {
    if (!vivo) return;
    window.setTimeout(() => {
      if (vivo) escribir();
    }, 250);
  });
  caja?.addEventListener("click", escribir);

  if (barra && !reducido) {
    Promise.all(precargados.map((imagen) => imagen.decode().catch(() => {}))).then(() => {
      if (!vivo) return;
      let tb = performance.now();
      const loop = (ahora: number) => {
        if (!vivo) return;
        cuadroHeader = requestAnimationFrame(loop);
        if (!document.hidden) {
          const n = Math.max(0, Math.floor((Math.max(0, ahora - tb) / (1000 / 15)) % (cuadrosLogo.length + 12)));
          barra.src = cuadrosLogo[Math.min(n, cuadrosLogo.length - 1)];
        }
      };
      cuadroHeader = requestAnimationFrame(loop);
    });
  }

  return () => {
    vivo = false;
    cancelAnimationFrame(cuadroHeader);
    io.disconnect();
    caja?.removeEventListener("click", escribir);
  };
}
