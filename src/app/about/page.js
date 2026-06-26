import SectionHero from "./SectionHero";
import SectionStory from "./SectionStory";
import SectionValues from "./SectionValues";
import SectionStats from "@/app/components/shared/SectionStats";
import SectionBanner from "@/app/components/shared/SectionBanner";

export const metadata = {
  title: "OXVLO - About",
};

export default function AboutPage() {
  return (
    <>
      <SectionHero />
      <SectionStory />
      <SectionValues />
      <SectionStats />
      <SectionBanner heading="Want us in your corner?" subheading="Tell us what you're running. One team picks it up." buttonLabel="Get in touch" buttonHref="/contact" />
    </>
  );
}
