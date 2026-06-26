function SectionStory() {
  return (
    <section className="px-14 py-[84px] border-t border-oxv-border-divider grid grid-cols-[0.85fr_1.15fr] gap-[72px] items-start">
      <h2 className="font-display font-semibold text-[34px] leading-[1.15] tracking-[-0.02em] m-0 text-oxv-heading">
        Why we exist
      </h2>
      <div className="flex flex-col gap-[22px]">
        <p className="text-[19px] leading-[1.65] text-oxv-text-subtle m-0">
          Most teams end up juggling a registrar here, a host there, an SEO contractor, and a pile
          of half-finished automations — each with its own login, invoice, and excuse when something
          breaks.
        </p>
        <p className="text-[19px] leading-[1.65] text-oxv-text-muted m-0">
          We started OXVLO to collapse all of that into one team you can actually call. We take
          ownership of the moving parts — domains, hosting, development, search, and the AI that
          ties them together — so the businesses we work with can spend their attention on the work
          that only they can do.
        </p>
      </div>
    </section>
  );
}

export default SectionStory;
