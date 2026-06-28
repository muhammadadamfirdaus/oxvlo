const bullets = [
  '24/7 autonomous agents',
  'Connects to 200+ tools',
  'No-code visual workflows',
];

const workflowSteps = [
  { title: 'New message', meta: 'Trigger' },
  { title: 'AI Agent', meta: 'Reads + Decides' },
  { title: 'Reply + log', meta: 'Action' },
];

function Section8() {
  return (
    <section className="px-4 md:px-8 lg:px-14 py-12 md:py-16 lg:py-24 border-t border-oxv-border-divider bg-gradient-to-b from-[#0c0b10] to-oxv-background flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-center">
      <div className="w-full md:flex-1">
        <div className="font-mono text-[15px] tracking-oxv-label mb-[10px] text-oxv-accent">
          AI Automation
        </div>
        <h2 className="font-display font-semibold text-[26px] md:text-[34px] lg:text-oxv-h2 m-0 mb-5 text-oxv-heading text-balance">
          We put the busywork on autopilot
        </h2>
        <p className="text-[18px] leading-[1.6] text-oxv-text-muted m-0">
          OXVLO AI connects to your stack and runs the repetitive work — replies, reports,
          publishing, monitoring — so your team ships the things that matter.
        </p>
        <div className="flex flex-col gap-4 mt-[30px]">
          {bullets.map((text) => (
            <div key={text} className="flex items-center gap-[14px]">
              <div className="w-2 h-2 rounded-full bg-oxv-accent oxv-glow-dot shrink-0" />
              <span className="text-base text-[#cdd2d8]">{text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full md:flex-1 bg-oxv-background-card border border-oxv-border rounded-2xl min-h-[200px] md:min-h-[280px] lg:min-h-[340px] p-6 md:p-8 lg:p-11 flex flex-col items-center justify-center">
        {workflowSteps.map((step, i) => (
          <div key={step.title} className="flex flex-col items-center">
            {i > 0 && <div className="w-0.5 h-[26px] oxv-connector-line" />}
            <div className="bg-oxv-background-hover border border-oxv-border-subtle rounded-xl px-5 py-4 flex items-center gap-[14px] w-[260px]">
              <div className="w-[9px] h-[9px] rounded-full bg-oxv-accent oxv-glow-dot-small shrink-0" />
              <div>
                <div className="text-[15px] font-semibold text-oxv-text mb-[3px]">{step.title}</div>
                <div className="font-mono text-[12px] text-oxv-text-dim">{step.meta}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Section8;
