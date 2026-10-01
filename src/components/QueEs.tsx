import { useEffect, useRef, useState } from "react";
import { retraso } from "../lib/estilo";
import { Raya } from "./Raya";

const retratos = Array.from({ length: 17 }, (_, i) => `/fotosPrimerComponente/${String(i + 1).padStart(2, "0")}.webp`);
const fuentesCuyo = ["parral-gruesa", "parral", "zarcillo", "damajuana", "acequia"];
const ritmo = 280;

function TodoCuyo({ activo }: { activo: boolean }) {
  const [fuente, setFuente] = useState(0);

  useEffect(() => {
    if (!activo) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setFuente((n) => (n + 1) % fuentesCuyo.length), ritmo);
    return () => window.clearInterval(id);
  }, [activo]);

  return (
    <>
      {fuentesCuyo.map((nombre, i) => (
        <b
          key={nombre}
          className={`fuente-viva ${nombre}${i === fuente ? " activa" : ""}`}
          aria-hidden={i === fuente ? undefined : true}
        >
          todo Cuyo
        </b>
      ))}
    </>
  );
}

function Retratos({ activo }: { activo: boolean }) {
  const indice = useRef(0);
  const [foto, setFoto] = useState({ frente: 0, capas: [retratos[0], ""] as [string, string] });

  useEffect(() => {
    if (!activo) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let cancelado = false;
    const id = window.setInterval(() => {
      const prox = (indice.current + 1) % retratos.length;
      const precarga = new Image();
      precarga.decoding = "async";
      precarga.onload = () => {
        if (cancelado) return;
        indice.current = prox;
        setFoto((actual) => {
          const atras = actual.frente === 0 ? 1 : 0;
          const capas: [string, string] = [actual.capas[0], actual.capas[1]];
          capas[atras] = retratos[prox];
          return { frente: atras, capas };
        });
      };
      precarga.src = retratos[prox];
    }, ritmo);
    return () => {
      cancelado = true;
      window.clearInterval(id);
    };
  }, [activo]);

  return (
    <figure className="retratos" aria-hidden="true">
      {foto.capas.map(
        (src, i) =>
          src && (
            <img
              key={i}
              src={src}
              alt=""
              width={1000}
              height={1497}
              decoding="async"
              className={i === foto.frente ? "activa" : ""}
            />
          ),
      )}
    </figure>
  );
}

export function QueEs() {
  const seccion = useRef<HTMLElement>(null);
  const [activo, setActivo] = useState(false);

  useEffect(() => {
    const nodo = seccion.current;
    if (!nodo) return;
    let enPantalla = false;
    const publicar = () => setActivo(enPantalla && document.visibilityState === "visible");
    const observador = new IntersectionObserver(
      ([entrada]) => {
        enPantalla = entrada.isIntersecting;
        publicar();
      },
      { rootMargin: "120px 0px" },
    );
    observador.observe(nodo);
    document.addEventListener("visibilitychange", publicar);
    return () => {
      observador.disconnect();
      document.removeEventListener("visibilitychange", publicar);
    };
  }, []);

  return (
    <section id="que-es" ref={seccion}>
      <div className="adentro">
        <div className="columnas ancha">
          <div>
            <h2 className="titulo ancho hierve">
              <span className="linea entra" style={retraso("100ms")}>
                Tecnología e innovación.
              </span>
              <span className="linea entra" style={retraso("400ms")}>
                Conectando a
              </span>
              <span className="linea linea-cuyo entra" style={retraso("550ms")}>
                <TodoCuyo activo={activo} />
              </span>
            </h2>
            <Raya />
            <div className="espacio" />
            <p className="texto grande entra" style={retraso("600ms")}>
              Cuyo Tech Week nace para convertir a Mendoza en el punto de encuentro de la tecnología, la innovación y el
              emprendimiento de la región.
            </p>
          </div>
          <Retratos activo={activo} />
        </div>
      </div>
    </section>
  );
}
