const tlds = [
  { label: '.io', active: false },
  { label: '.co', active: true },
  { label: '.ai', active: false },
  { label: '.dev', active: false },
  { label: '.app', active: false },
  { label: '.studio', active: false },
];

function Section4() {
  return (
    <section className="px-4 md:px-8 lg:px-14 py-12 md:py-16 lg:py-24 border-t border-oxv-border-divider flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-center">
      <div className="w-full md:flex-1 bg-oxv-background-card border border-oxv-border rounded-2xl min-h-[200px] md:min-h-[280px] lg:min-h-[340px] p-6 md:p-8 lg:p-11 flex flex-col justify-center gap-6">
        <div className="flex items-center gap-3 bg-oxv-background-hover border border-oxv-border-subtle rounded-xl px-[18px] py-[17px]">
          <div className="w-[9px] h-[9px] rounded-full bg-oxv-accent oxv-glow-dot-small shrink-0" />
          <span className="font-mono text-[17px] text-oxv-text">
            yourbrand<span className="text-oxv-accent">.com</span>
          </span>
          <span className="ml-auto font-mono text-[11px] tracking-[0.12em] text-oxv-accent">
            AVAILABLE
          </span>
        </div>
        <div className="flex gap-[10px] flex-wrap">
          {tlds.map(({ label, active }) => (
            <span
              key={label}
              className={`px-[15px] py-2 border rounded-full font-mono text-[13px] ${
                active
                  ? 'border-oxv-accent text-oxv-accent'
                  : 'border-oxv-border-subtle text-oxv-text-muted'
              }`}
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      <div className="w-full md:flex-1">
        <div className="font-mono text-[15px] tracking-oxv-label mb-[10px] text-oxv-accent">
          Domains
        </div>
        <h2 className="font-display font-semibold text-[26px] md:text-[34px] lg:text-oxv-h2 m-0 mb-5 text-oxv-heading text-balance">
          Your name, locked in
        </h2>
        <p className="text-[18px] leading-[1.6] text-oxv-text-muted m-0">
          We find the right domain, register it, and manage DNS end to end — so your address is yours
          and simply works, with no markup games.
        </p>
      </div>
    </section>
  );
}

export default Section4;
