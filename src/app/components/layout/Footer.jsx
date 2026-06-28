import Link from "next/link";
import Image from "next/image";
import logo from "@/app/assets/images/oxvlo-logo-transparent.png";
import iconEmail from "@/app/assets/images/icons/email.png";
import iconFacebook from "@/app/assets/images/icons/facebook.png";
import iconInstagram from "@/app/assets/images/icons/instagram.png";
import iconTwitter from "@/app/assets/images/icons/twitter.png";
import iconWhatsapp from "@/app/assets/images/icons/whatsapp.png";

function FooterColumnHeading({ children }) {
  return (
    <div className="inline-flex flex-col items-center self-start">
      <span className="text-md text-oxv-text-nav font-semibold">{children}</span>
      <div className="oxv-gradient-line w-[calc(100%+24px)] mt-2 -mx-3" />
    </div>
  );
}

function Footer() {
  const services = ["Domains", "Hosting", "SEO", "AI Automation"];
  const resources = ["Docs", "Status", "Blog"];

  const socialLinks = [
    { href: "mailto:support@oxvlo.com", src: iconEmail, alt: "Email" },
    { href: "https://facebook.com/oxvlo", src: iconFacebook, alt: "Facebook" },
    { href: "https://instagram.com/oxvlo", src: iconInstagram, alt: "Instagram" },
    { href: "https://x.com/oxvlo", src: iconTwitter, alt: "X (Twitter)" },
    { href: "https://wa.me/6287870700636", src: iconWhatsapp, alt: "WhatsApp" },
  ];

  return (
    <footer>
      <div className="px-4 md:px-8 lg:px-14 pt-10 md:pt-12 lg:pt-14 pb-14 md:pb-20 lg:pb-24 border-t border-oxv-border-divider flex flex-col lg:flex-row gap-8 lg:gap-24">
        <div className="lg:flex-1">
          <div className="mb-[14px]">
            <Image src={logo} alt="OXVLO" height={22} width={Math.round((logo.width / logo.height) * 22)} />
          </div>
          <p className="text-sm text-oxv-text-faint max-w-[280px] mb-4">PT OXVLO Global Technologies</p>
          <p className="text-sm text-oxv-text-faint max-w-[280px] m-0">
            Plaza Simatupang, 6th Floor, Unit 3<br />
            Jl. TB Simatupang Kav. IS No. 01
            <br />
            Kebayoran Lama, South Jakarta, Jakarta 12310 Indonesia
          </p>
        </div>

        <div className="flex flex-wrap gap-8 lg:flex-nowrap lg:gap-4 lg:flex-[4]">
          <div className="w-[calc(50%-16px)] lg:flex-1 flex flex-col gap-3">
            <FooterColumnHeading>Services</FooterColumnHeading>
            {services.map((s) => (
              <span key={s} className="text-sm text-oxv-text-muted cursor-pointer hover:text-oxv-text transition-colors">
                {s}
              </span>
            ))}
          </div>

          <div className="w-[calc(50%-16px)] lg:flex-1 flex flex-col gap-3">
            <FooterColumnHeading>Company</FooterColumnHeading>
            <Link href="/about" className="text-sm text-oxv-text-muted no-underline hover:text-oxv-text transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm text-oxv-text-muted no-underline hover:text-oxv-text transition-colors">
              Contact
            </Link>
          </div>

          <div className="w-[calc(50%-16px)] lg:flex-1 flex flex-col gap-3">
            <FooterColumnHeading>Resources</FooterColumnHeading>
            {resources.map((r) => (
              <span key={r} className="text-sm text-oxv-text-muted cursor-pointer hover:text-oxv-text transition-colors">
                {r}
              </span>
            ))}
          </div>

          <div className="w-[calc(50%-16px)] lg:flex-1 flex flex-col gap-3">
            <FooterColumnHeading>Connect</FooterColumnHeading>
            <div className="flex gap-[14px] items-center mt-0.5">
              {socialLinks.map((social, i) => (
                <a key={i} href={social.href} target="blank" className="opacity-60 hover:opacity-100 transition-opacity flex">
                  <Image src={social.src} alt={social.alt} width={32} height={32} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-4 md:mx-8 lg:mx-14">
        <div className="oxv-divider" />
        <div className="py-8 text-center text-[13px] text-oxv-text-faint">© 2026 OXVLO. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default Footer;
