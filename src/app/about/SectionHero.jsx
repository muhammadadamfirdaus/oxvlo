function SectionHero() {
  return (
    <section className="relative overflow-hidden px-14 py-[120px] pb-24 text-center">
      <div className="absolute inset-0 left-1/2 -translate-x-1/2 w-screen oxv-background-grid pointer-events-none" />
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[720px] h-[520px] oxv-glow-orb-soft animate-oxv-glow pointer-events-none" />
      <div className="relative">
        <div className="font-mono text-[13px] tracking-oxv-mono uppercase mb-[22px] text-oxv-accent">
          About
        </div>
        <h1 className="font-display font-semibold text-[60px] leading-[1.08] tracking-[-0.03em] m-0 mx-auto max-w-[760px] oxv-text-gradient text-balance">
          The team that keeps the lights on
        </h1>
        <p className="text-[20px] leading-[1.55] text-oxv-text-muted max-w-[600px] mx-auto mt-7 mb-0">
          OXVLO runs the digital infrastructure most businesses would rather not think about —
          quietly, reliably, and under one roof.
        </p>
      </div>
    </section>
  );
}

export default SectionHero;
