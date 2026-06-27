import Image from "next/image";
import imgKompascom from "../assets/images/clients/kompascom.png";
import imgKompastv from "../assets/images/clients/kompastv.png";
import imgTempoco from "../assets/images/clients/tempoco.png";
import imgBca from "../assets/images/clients/bca.png";
import imgMandiri from "../assets/images/clients/mandiri.png";
import imgDjarum from "../assets/images/clients/djarum.png";
import imgTraveloka from "../assets/images/clients/traveloka.png";
import imgPalyja from "../assets/images/clients/palyja.png";
import imgRitsumeikan from "../assets/images/clients/ritsumeikan.png";
import imgSantiniSingapore from "../assets/images/clients/santini-singapore.png";
import imgPizzaHut from "../assets/images/clients/pizza-hut.png";

const logos = [
  { name: "Ritsumeikan", src: imgRitsumeikan },
  { name: "SantiniSingapore", src: imgSantiniSingapore },
  { name: "PizzaHut", src: imgPizzaHut },
  { name: "Kompas.com", src: imgKompascom },
  { name: "KompasTV", src: imgKompastv },
  { name: "Tempo.co", src: imgTempoco },
  { name: "BCA", src: imgBca },
  { name: "Mandiri", src: imgMandiri },
  { name: "Djarum", src: imgDjarum },
  { name: "Traveloka", src: imgTraveloka },
  { name: "Palyja", src: imgPalyja },
];

function LogoItem({ logo }) {
  return (
    <div className="flex items-center gap-3 opacity-55 hover:opacity-100 transition-opacity duration-[250ms]">
      {logo.src ? (
        <Image src={logo.src} alt={logo.name} width={Math.round((24 / logo.src.height) * logo.src.width)} height={32} className="object-contain" />
      ) : (
        <>
          <div className="w-[32px] h-[32px] rounded-lg bg-oxv-background-surface border border-oxv-border-subtle flex items-center justify-center font-display font-bold text-sm text-[#cdd2d8]">{logo.letter}</div>
          <span className="font-display font-semibold text-[21px] tracking-[-0.01em] text-[#b6bbc3] whitespace-nowrap">{logo.name}</span>
        </>
      )}
    </div>
  );
}

function Section2() {
  return (
    <section className="px-14 py-[46px] border-t border-oxv-border-divider overflow-hidden">
      <div className="max-w-[880px] mx-auto">
        {/* <div className="text-center font-text text-md text-oxv-text-faint mb-8">Quietly powering the teams behind these names</div> */}
        <div className="relative oxv-marquee-wrapper">
          <div className="inline-flex w-max gap-16 items-center animate-oxv-marquee will-change-transform">
            {logos.map((logo) => (
              <LogoItem key={`a-${logo.name}`} logo={logo} />
            ))}
            {logos.map((logo) => (
              <LogoItem key={`b-${logo.name}`} logo={logo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;
