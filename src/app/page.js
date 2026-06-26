import Section1 from "./home/Section-1";
import Section2 from "./home/Section-2";
import Section3 from "./home/Section-3";
import Section4 from "./home/Section-4";
import Section5 from "./home/Section-5";
import Section6 from "./home/Section-6";
import Section7 from "./home/Section-7";
import Section8 from "./home/Section-8";
import SectionStats from "@/app/components/shared/SectionStats";
import SectionBanner from "@/app/components/shared/SectionBanner";

export const metadata = {
  title: "OXVLO - Digital Infrastructure for Modern Business",
};

export default function HomePage() {
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <SectionStats />
      <SectionBanner heading="Ready to put it all in one place?" subheading="Domains, hosting, SEO, and AI — handled by one team. Let's talk." buttonLabel="Get started" buttonHref="/contact" />
    </>
  );
}
