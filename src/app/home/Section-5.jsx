const uptimeBars = [
  true, true, true, true, true, true, true, true, true,
  false,
  true, true, true, true, true, true, true, true,
  false,
  true, true, true, true, true, true,
];

const highlights = [
  { value: 'Global', label: 'Edge Network' },
  { value: 'Auto', label: 'Scaling' },
  { value: 'Daily', label: 'Backups' },
];

function Section5() {
  return (
    <section className="px-14 py-24 border-t border-oxv-border-divider grid grid-cols-2 gap-16 items-center">
      <div>
        <div className="font-mono text-[15px] tracking-oxv-label mb-[10px] text-oxv-accent">
          Hosting
        </div>
        <h2 className="font-display font-semibold text-oxv-h2 m-0 mb-5 text-oxv-heading text-balance">
          Always on, always fast
        </h2>
        <p className="text-[18px] leading-[1.6] text-oxv-text-muted m-0">
          Resilient cloud hosting we monitor around the clock, scaling automatically so your site
          stays quick under any load.
        </p>
        <div className="flex gap-[34px] mt-[30px]">
          {highlights.map(({ value, label }) => (
            <div key={label}>
              <div className="font-display text-[26px] font-semibold text-oxv-heading">{value}</div>
              <div className="text-[13px] text-oxv-text-dim mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-oxv-background-card border border-oxv-border rounded-2xl min-h-[340px] p-11 flex flex-col justify-center gap-[30px]">
        <div>
          <div className="font-display text-[60px] font-semibold leading-none text-oxv-accent">
            99.99%
          </div>
          <div className="text-sm text-oxv-text-dim mt-2">Uptime, last 12 months</div>
        </div>
        <div className="flex items-end gap-1 h-[60px]">
          {uptimeBars.map((full, i) => (
            <div
              key={i}
              className={`flex-1 rounded-[2px] ${
                full ? 'h-full bg-oxv-accent opacity-85' : 'h-[64%] bg-oxv-border-subtle opacity-100'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section5;
