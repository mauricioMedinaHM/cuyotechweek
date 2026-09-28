import { retraso } from "../lib/estilo";

export function Cajas({
  items,
  desde = 900,
  paso = 100,
  grandes = false,
  clase = "",
}: {
  items: string[];
  desde?: number;
  paso?: number;
  grandes?: boolean;
  clase?: string;
}) {
  const nombre = ["cajas", grandes ? "grandes" : "", clase].filter(Boolean).join(" ");
  return (
    <div className={nombre}>
      {items.map((texto, i) => (
        <span key={texto} className="caja hierve dibuja" style={retraso(`${desde + i * paso}ms`)}>
          {texto}
        </span>
      ))}
    </div>
  );
}
