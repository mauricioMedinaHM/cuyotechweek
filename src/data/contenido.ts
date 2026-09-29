export const calendarioLuma = "https://luma.com/embed/calendar/cal-LHE9L5W4OFih7Fc/events?lt=dark";

export const organizan = [
  "Dirección de Emprendedores y Cooperativas",
  "Polo TIC Mendoza",
  "Embarca",
  "Campus Olegario",
  "QuienVino",
  "ChicasTech",
  "Endeavor",
  "LODO",
  "Limit Lab",
];

export const acompanan = ["Underc0de", "WEDO", "Cuyo Connect", "Pencilbox", "Anden", "VendimiaTech", "Andes Tech"];

export const experiencias = [
  {
    titulo: "Opening & Networking",
    texto:
      "La apertura de Cuyo Tech Week: un encuentro entre emprendedores, empresas y referentes del ecosistema para conocernos, conectar y dar inicio a las actividades.",
  },
  {
    titulo: "Tecnología + Cooperativismo",
    texto:
      "Encuentro sobre nuevos modelos de organización y cooperativismo tecnológico, acompañado por una experiencia y recorrido por el Parque TIC Mendoza.",
  },
  {
    titulo: "Workshops Tech",
    texto:
      "Espacios prácticos sobre nuevas herramientas y tecnologías, con experiencias en automatización, n8n, BNB y otras tendencias del ecosistema.",
  },
  {
    titulo: "Founders, empresas y nuevas ideas",
    texto:
      "Charlas y encuentros protagonizados por quienes están creando empresas, desarrollando tecnología y construyendo nuevos modelos de negocio.",
  },
  {
    titulo: "WEDO + Comunidad",
    texto:
      "Espacios de encuentro que ponen en valor la diversidad de actores y comunidades que forman parte del ecosistema emprendedor y tecnológico.",
  },
  {
    titulo: "Tech, Wine & Mendoza",
    texto:
      "Una propuesta para descubrir también el entorno que hace única a nuestra región, conectando comunidad, tecnología y la experiencia del vino mendocino.",
  },
];

export const cuadrosLogo = Array.from(
  { length: 45 },
  (_, i) => `/recursos/logo-blanco/${String(i).padStart(3, "0")}.webp`,
);
