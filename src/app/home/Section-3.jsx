const steps = [
  {
    title: 'Brainstorming',
    description: 'We talk through your ideas, then plan how to make it happen.',
  },
  {
    title: 'Engineering',
    description: 'We build everything out and tune it to fit exactly how you work.',
  },
  {
    title: 'Online',
    description: 'Everything goes live, monitored and supported, ready when you are.',
  },
];

function Step({ title, description }) {
  return (
    <div className="flex-1 max-w-[320px] text-center">
      <div className="flex items-center justify-center gap-[11px] mb-3">
        <div className="w-2 h-2 rounded-full shrink-0 bg-oxv-accent oxv-glow-dot" />
        <h3 className="font-display text-[21px] font-semibold m-0 text-oxv-text">{title}</h3>
      </div>
      <p className="text-[14.5px] leading-[1.6] text-oxv-text-body m-0 line-clamp-3">{description}</p>
    </div>
  );
}

function Separator() {
  return (
    <div className="flex-none self-center flex items-center justify-center">
      <div className="w-14 h-px rounded-sm bg-gradient-to-r from-transparent via-oxv-accent to-transparent" />
    </div>
  );
}

function Section3() {
  return (
    <section className="px-14 py-24 border-t border-oxv-border-divider">
      <div className="text-center max-w-[820px] mx-auto mb-[60px]">
        <h2 className="font-display font-semibold text-[40px] tracking-[-0.02em] m-0 mb-4 text-oxv-heading text-balance">
          Now it&apos;s your turn
        </h2>
        <p className="text-[18px] leading-[1.6] text-oxv-text-muted m-0">
          Working with us, from the first call to ongoing care, we handle every moving part.
        </p>
      </div>
      <div className="flex items-start justify-center gap-7 max-w-[1080px] mx-auto">
        {steps.map((step, i) => (
          <div key={step.title} className="flex items-start flex-1 max-w-[320px]">
            {i > 0 && <Separator />}
            <Step title={step.title} description={step.description} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Section3;
