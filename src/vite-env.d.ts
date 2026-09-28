/// <reference types="vite/client" />

declare module "*.txt" {
  const contenido: string;
  export default contenido;
}
