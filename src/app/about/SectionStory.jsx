function SectionStory() {
  return (
    <section className="px-4 md:px-8 lg:px-14 py-12 md:py-16 lg:py-[84px] border-t border-oxv-border-divider flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-[72px] items-start">
      <h2 className="w-full md:flex-[0.85] font-display font-semibold text-[22px] md:text-[28px] lg:text-[34px] leading-[1.15] tracking-[-0.02em] m-0 text-oxv-heading">
        Why we exist
      </h2>
      <div className="w-full md:flex-[1.15] flex flex-col gap-[22px]">
        <p className="text-[15px] md:text-[17px] lg:text-[19px] leading-[1.65] text-oxv-text-subtle m-0">
          Most teams end up juggling a registrar here, a host there, an SEO contractor, and a pile
          of half-finished automations — each with its own login, invoice, and excuse when something
          breaks.
        </p>
        <p className="text-[15px] md:text-[17px] lg:text-[19px] leading-[1.65] text-oxv-text-muted m-0">
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
