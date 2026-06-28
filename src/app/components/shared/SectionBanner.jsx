import Button from '@/app/components/utilities/Button';

function SectionBanner({ heading, subheading, buttonLabel, buttonHref = '/contact' }) {
  return (
    <section className="mx-4 md:mx-8 lg:mx-14 mb-14 md:mb-20 lg:mb-24 mt-6 md:mt-8 lg:mt-10 px-6 md:px-12 lg:px-[72px] py-10 md:py-14 lg:py-[72px] text-center rounded-[20px] oxv-background-banner border border-oxv-border-promo relative overflow-hidden">
      <div className="absolute bottom-[-160px] left-1/2 -translate-x-1/2 w-[280px] md:w-[480px] lg:w-[720px] h-[360px] oxv-glow-orb pointer-events-none" />
      <h2 className="font-display font-bold text-[26px] md:text-[36px] lg:text-[46px] tracking-[-0.02em] mb-[18px] relative oxv-text-gradient-banner text-balance">
        {heading}
      </h2>
      <p className="text-[18px] text-oxv-text-muted mb-8 relative">{subheading}</p>
      <Button variant="primary" size="lg" href={buttonHref} className="oxv-button-banner relative">
        {buttonLabel}
      </Button>
    </section>
  );
}

export default SectionBanner;
