import { retraso } from "../lib/estilo";

const trazoA =
  "M0.0 18.9 L40.0 18.6 L80.0 22.6 L120.0 19.3 L160.0 22.4 L200.0 21.1 L240.0 18.5 L280.0 20.6 L320.0 16.7 L360.0 18.4 L400.0 15.4 L440.0 15.2 L480.0 17.4 L520.0 20.3 L560.0 16.5 L600.0 18.0 L640.0 21.5 L680.0 24.3 L720.0 22.5 L760.0 21.5 L800.0 25.1 L840.0 18.6 L880.0 23.1 L920.0 18.5 L960.0 16.7 L1000.0 15.9 L1040.0 16.7 L1080.0 19.8 L1120.0 16.1 L1160.0 19.3";
const trazoB =
  "M3.0 22.0 L43.0 20.7 L83.0 25.4 L123.0 20.2 L163.0 23.3 L203.0 22.5 L243.0 21.9 L283.0 22.9 L323.0 18.6 L363.0 21.3 L403.0 17.8 L443.0 17.0 L483.0 21.2 L523.0 23.7 L563.0 18.1 L603.0 20.9 L643.0 24.2 L683.0 28.4 L723.0 26.0 L763.0 23.3 L803.0 29.6 L843.0 19.7 L883.0 25.3 L923.0 22.2 L963.0 17.9 L1003.0 18.4 L1043.0 17.4 L1083.0 23.1 L1123.0 19.7 L1163.0 22.2";

export function Raya({ delay = "700ms" }: { delay?: string }) {
  return (
    <svg className="raya hierve" viewBox="0 0 1180 40" preserveAspectRatio="none" aria-hidden="true" style={retraso(delay)}>
      <path d={trazoA} style={{ ["--largo" as string]: 1164, strokeDasharray: 1164 }} />
      <path d={trazoB} style={{ ["--largo" as string]: 1166, strokeDasharray: 1166 }} />
    </svg>
  );
}
