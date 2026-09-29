import { useEffect } from "react";
import { Barra } from "./components/Barra";
import { Construida } from "./components/Construida";
import { Experiencias } from "./components/Experiencias";
import { Filtros } from "./components/Filtros";
import { Hero } from "./components/Hero";
import { Pie } from "./components/Pie";
import { QueEs } from "./components/QueEs";
import { Quienes } from "./components/Quienes";
import { Sumate } from "./components/Sumate";
import { Vivir } from "./components/Vivir";
import { iniciarLanding } from "./lib/iniciar";
import "./styles/landing.css";

export function App() {
  useEffect(() => iniciarLanding(), []);

  return (
    <>
      <Filtros />
      <Barra />
      <Hero />
      <QueEs />
      <Vivir />
      <Experiencias />
      <Quienes />
      <Sumate />
      <Construida />
      <Pie />
    </>
  );
}
