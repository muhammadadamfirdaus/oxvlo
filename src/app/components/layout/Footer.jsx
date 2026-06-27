import Link from "next/link";
import Image from "next/image";
import logo from "@/app/assets/images/oxvlo-logo-transparent.png";
import IconFacebook from "@/assets/icons/IconFacebook";
import IconInstagram from "@/assets/icons/IconInstagram";
import IconX from "@/assets/icons/IconX";
import IconThreads from "@/assets/icons/IconThreads";
import IconWhatsapp from "@/assets/icons/IconWhatsapp";

function FooterColumnHeading({ children }) {
  return (
    <div className="inline-flex flex-col items-center self-start">
      <span className="text-[13px] text-oxv-text-nav font-semibold">{children}</span>
      <div className="oxv-gradient-line w-[calc(100%+24px)] mt-2 -mx-3" />
    </div>
  );
}

function Footer() {
  const services = ["Domains", "Hosting", "SEO", "AI Automation"];
  const resources = ["Docs", "Status", "Blog"];

  const socialLinks = [
    { href: "#", icon: <IconFacebook className="w-[18px] h-[18px]" /> },
    { href: "#", icon: <IconInstagram className="w-[18px] h-[18px]" /> },
    { href: "#", icon: <IconX className="w-[17px] h-[17px]" /> },
    { href: "#", icon: <IconThreads className="w-[18px] h-[18px]" /> },
    { href: "#", icon: <IconWhatsapp className="w-[18px] h-[18px]" /> },
  ];

  return (
    <footer>
      <div className="px-14 pt-14 pb-24 border-t border-oxv-border-divider grid grid-cols-[2fr_1fr_1fr_1fr_1.2fr] gap-10">
        <div>
          <div className="mb-[14px]">
            <Image src={logo} alt="OXVLO" height={22} width={Math.round((logo.width / logo.height) * 22)} />
          </div>
          <p className="text-sm text-oxv-text-faint max-w-[280px] m-0">The digital infrastructure team for modern businesses.</p>
        </div>

        <div className="flex flex-col gap-3">
          <FooterColumnHeading>Services</FooterColumnHeading>
          {services.map((s) => (
            <span key={s} className="text-sm text-oxv-text-muted cursor-pointer hover:text-oxv-text transition-colors">
              {s}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <FooterColumnHeading>Company</FooterColumnHeading>
          <Link href="/about" className="text-sm text-oxv-text-muted no-underline hover:text-oxv-text transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-sm text-oxv-text-muted no-underline hover:text-oxv-text transition-colors">
            Contact
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <FooterColumnHeading>Resources</FooterColumnHeading>
          {resources.map((r) => (
            <span key={r} className="text-sm text-oxv-text-muted cursor-pointer hover:text-oxv-text transition-colors">
              {r}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <FooterColumnHeading>Follow</FooterColumnHeading>
          <div className="flex gap-[14px] items-center mt-0.5">
            {socialLinks.map((social, i) => (
              <a key={i} href={social.href} className="text-oxv-text-muted hover:text-oxv-accent transition-colors flex">
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-14">
        <div className="oxv-divider" />
        <div className="py-8 text-center text-[13px] text-oxv-text-faint">© 2026 OXVLO. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default Footer;
