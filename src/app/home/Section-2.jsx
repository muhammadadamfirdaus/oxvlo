const logos = [
  { name: 'Northwind', letter: 'N' },
  { name: 'Lumen', letter: 'L' },
  { name: 'Vertex', letter: 'V' },
  { name: 'Atlas', letter: 'A' },
  { name: 'Quanta', letter: 'Q' },
  { name: 'Meridian', letter: 'M' },
  { name: 'Pulse', letter: 'P' },
  { name: 'Cobalt', letter: 'C' },
];

function LogoItem({ logo }) {
  return (
    <div className="flex items-center gap-3 opacity-55 hover:opacity-100 transition-opacity duration-[250ms]">
      <div className="w-[30px] h-[30px] rounded-lg bg-oxv-background-surface border border-oxv-border-subtle flex items-center justify-center font-display font-bold text-sm text-[#cdd2d8]">
        {logo.letter}
      </div>
      <span className="font-display font-semibold text-[21px] tracking-[-0.01em] text-[#b6bbc3] whitespace-nowrap">
        {logo.name}
      </span>
    </div>
  );
}

function Section2() {
  return (
    <section className="px-14 py-[46px] border-t border-oxv-border-divider overflow-hidden">
      <div className="max-w-[880px] mx-auto">
        <div className="text-center font-mono text-[12px] tracking-oxv-mono uppercase text-oxv-text-faint mb-[34px]">
          Quietly powering the teams behind these names
        </div>
        <div className="relative oxv-marquee-wrapper">
          <div className="inline-flex w-max gap-16 items-center animate-oxv-marquee">
            {logos.map((logo) => (
              <LogoItem key={`a-${logo.name}`} logo={logo} />
            ))}
            {logos.map((logo) => (
              <LogoItem key={`b-${logo.name}`} logo={logo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;
