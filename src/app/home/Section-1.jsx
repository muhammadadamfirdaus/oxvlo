import Button from "@/app/components/utilities/Button";

function Section1() {
  return (
    <section className="relative px-14 py-[130px] pb-[110px] text-center">
      <div className="absolute top-0 bottom-0 left-[calc(50%-50vw)] w-screen oxv-background-grid pointer-events-none" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-180px] left-[40%] -translate-x-1/2 w-[760px] h-[560px] oxv-glow-orb animate-oxv-glow" />
      </div>

      <div className="relative">
        <h1 className="font-display font-semibold text-oxv-hero max-w-[820px] mx-auto oxv-text-gradient text-balance m-0 oxv-animation-rise">Everything your business needs to exist online</h1>
        <p className="text-[20px] leading-[1.55] text-oxv-text-muted max-w-[640px] mx-auto mt-[30px] mb-0 oxv-animation-rise-delay-130">We keep your business online, so you can focus on running it.</p>
        <div className="flex gap-4 justify-center mt-[42px] oxv-animation-rise-delay-240">
          <Button variant="primary" size="lg" href="/contact" className="oxv-button-banner">
            Start a project
          </Button>
          <Button variant="secondary" size="lg" href="/contact">
            Talk to us
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Section1;
