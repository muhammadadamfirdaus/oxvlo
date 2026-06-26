const highlights = [
  { value: 'Custom', label: 'Design' },
  { value: 'Modern', label: 'Stack' },
  { value: 'Ongoing', label: 'Support' },
];

function Section6() {
  return (
    <section className="px-14 py-24 border-t border-oxv-border-divider grid grid-cols-2 gap-16 items-center">
      <div className="bg-oxv-background-card border border-oxv-border rounded-2xl min-h-[340px] p-[30px] flex flex-col gap-[14px]">
        <div className="flex items-center gap-[7px]">
          <div className="w-[11px] h-[11px] rounded-full bg-oxv-border-subtle" />
          <div className="w-[11px] h-[11px] rounded-full bg-oxv-border-subtle" />
          <div className="w-[11px] h-[11px] rounded-full bg-oxv-border-subtle" />
          <div className="flex-1 h-[22px] rounded-md bg-oxv-background-hover border border-oxv-border ml-2" />
        </div>
        <div className="flex-1 rounded-[10px] bg-gradient-to-br from-[#15131f] to-[#0c0d11] border border-[#20232a] p-[26px] flex flex-col gap-[14px] justify-center">
          <div className="w-[56%] h-4 rounded-[5px] bg-oxv-accent opacity-85" />
          <div className="w-[88%] h-[9px] rounded bg-oxv-border-subtle" />
          <div className="w-[80%] h-[9px] rounded bg-oxv-border-subtle" />
          <div className="flex gap-3 mt-2">
            <div className="w-24 h-[34px] rounded-lg bg-oxv-accent opacity-90" />
            <div className="w-24 h-[34px] rounded-lg border border-oxv-border-subtle" />
          </div>
          <div className="flex gap-3 mt-[14px]">
            <div className="flex-1 h-12 rounded-lg bg-oxv-background-card border border-[#20232a]" />
            <div className="flex-1 h-12 rounded-lg bg-oxv-background-card border border-[#20232a]" />
            <div className="flex-1 h-12 rounded-lg bg-oxv-background-card border border-[#20232a]" />
          </div>
        </div>
      </div>

      <div>
        <div className="font-mono text-[15px] tracking-oxv-label mb-[10px] text-oxv-accent">
          Web Development
        </div>
        <h2 className="font-display font-semibold text-oxv-h2 m-0 mb-5 text-oxv-heading text-balance">
          Built to fit, not to template
        </h2>
        <p className="text-[18px] leading-[1.6] text-oxv-text-muted m-0">
          From a landing page to a full platform, we design and build it around how you actually
          work — then keep it shipping as you grow.
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
    </section>
  );
}

export default Section6;
