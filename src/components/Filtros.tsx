export function Filtros() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <defs>
        <filter id="h1" x="-6%" y="-10%" width="112%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.016" numOctaves={2} seed={3} result="r" />
          <feDisplacementMap in="SourceGraphic" in2="r" scale="2.8" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <filter id="h2" x="-6%" y="-10%" width="112%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.016" numOctaves={2} seed={11} result="r" />
          <feDisplacementMap in="SourceGraphic" in2="r" scale="2.8" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <filter id="h3" x="-6%" y="-10%" width="112%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.016" numOctaves={2} seed={29} result="r" />
          <feDisplacementMap in="SourceGraphic" in2="r" scale="2.8" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
    </svg>
  );
}
