export const calendarioLuma = "";

export const actores = [
  "Startups",
  "Empresas",
  "Emprendedores",
  "Universidades",
  "Inversores",
  "Comunidades tecnológicas",
  "Organismos públicos",
  "Referentes del ecosistema",
];

export const ejes = ["Tecnología", "Negocios", "Talento", "Innovación", "Comunidad"];

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
    numero: "01",
    titulo: "Opening & Networking",
    texto:
      "La apertura de Cuyo Tech Week: un encuentro entre emprendedores, empresas y referentes del ecosistema para conocernos, conectar y dar inicio a las actividades.",
  },
  {
    numero: "02",
    titulo: "Tecnología + Cooperativismo",
    texto:
      "Encuentro sobre nuevos modelos de organización y cooperativismo tecnológico, acompañado por una experiencia y recorrido por el Parque TIC Mendoza.",
  },
  {
    numero: "03",
    titulo: "Workshops Tech",
    texto:
      "Espacios prácticos sobre nuevas herramientas y tecnologías, con experiencias en automatización, n8n, BNB y otras tendencias del ecosistema.",
  },
  {
    numero: "04",
    titulo: "Founders, empresas y nuevas ideas",
    texto:
      "Charlas y encuentros protagonizados por quienes están creando empresas, desarrollando tecnología y construyendo nuevos modelos de negocio.",
  },
  {
    numero: "05",
    titulo: "Talento & Comunidad",
    texto:
      "Workshops, experiencias y encuentros orientados al desarrollo profesional, talento tecnológico y construcción de comunidad.",
  },
  {
    numero: "06",
    titulo: "Underc0de Day",
    texto:
      "Una jornada para conectar tecnología, conocimiento y comunidad en uno de los encuentros que forman parte de Cuyo Tech Week.",
  },
  {
    numero: "07",
    titulo: "WEDO + Comunidad",
    texto:
      "Espacios de encuentro que ponen en valor la diversidad de actores y comunidades que forman parte del ecosistema emprendedor y tecnológico.",
  },
  {
    numero: "08",
    titulo: "Networking & Experiencias",
    texto:
      "Porque las mejores conexiones no siempre suceden en un auditorio: afters, actividades recreativas y encuentros informales serán parte de la experiencia.",
  },
  {
    numero: "09",
    titulo: "Tech, Wine & Mendoza",
    texto:
      "Una propuesta para descubrir también el entorno que hace única a nuestra región, conectando comunidad, tecnología y la experiencia del vino mendocino.",
  },
];

export const cuadrosLogo = Array.from(
  { length: 45 },
  (_, i) => `/recursos/logo-blanco/${String(i).padStart(3, "0")}.png`,
);
