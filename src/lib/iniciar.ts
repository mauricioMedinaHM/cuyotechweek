export function iniciarLanding() {
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

  return () => {
    io.disconnect();
  };
}
