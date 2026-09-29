export const calendarioLuma = "https://luma.com/embed/calendar/cal-LHE9L5W4OFih7Fc/events?lt=dark";

export type Marca = { nombre: string; logo?: string; href?: string };

export const organizan: Marca[] = [
  { nombre: "Dirección de Emprendedores y Cooperativas", logo: "/recursos/logos/produccion.png" },
  { nombre: "Polo TIC Mendoza", logo: "/recursos/logos/polo-tic.png" },
  { nombre: "Embarca", logo: "/recursos/logos/embarca.png" },
  { nombre: "Campus Olegario", logo: "/recursos/logos/campus-olegario.png?v=3" },
  { nombre: "QuienVino", logo: "/recursos/logos/quienvino.png" },
  { nombre: "Endeavor", logo: "/recursos/logos/endeavor.png?v=1" },
  { nombre: "LODO", logo: "/recursos/logos/lodo.png" },
  { nombre: "Limit Lab", logo: "/recursos/logos/limit-lab.png" },
];

export const acompanan: Marca[] = [
  { nombre: "Underc0de", logo: "/recursos/logos/underc0de.png?v=1" },
  { nombre: "WEDO" },
  { nombre: "Cuyo Connect", logo: "/recursos/logos/cuyo-connect.png", href: "https://cuyoconnect.com/" },
  { nombre: "Pencilbox" },
  { nombre: "Anden", logo: "/recursos/logos/anden.png" },
  { nombre: "VendimiaTech", logo: "/recursos/logos/vendimia-tech.png?v=2" },
  { nombre: "Andes Tech", logo: "/recursos/logos/andes-tech.png" },
];

export const experienciaEndeavor = {
  titulo: "Experiencia Endeavor",
  hashtag: "#ExperienciaEndeavor",
  logo: "/recursos/logos/experiencia-endeavor.png",
  texto:
    "El jueves 8 de octubre, en Naves y Báscula, Endeavor reúne a emprendedores, mentores e inversores de la región. Una jornada de charlas, masterclasses y encuentros para conectar y hacer crecer un proyecto.",
};

export const cuadrosLogo = Array.from(
  { length: 45 },
  (_, i) => `/recursos/logo-blanco/${String(i).padStart(3, "0")}.webp`,
);
