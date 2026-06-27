import Link from "next/link";
import Image from "next/image";
import logo from "@/app/assets/images/oxvlo-logo-transparent.png";
import Menu from "./Menu";
import Button from "@/app/components/utilities/Button";

function Header() {
  return (
    <header className="relative z-50">
      <div className="flex items-center justify-between px-14 py-3 border-b border-oxv-border-divider">
        <Link href="/">
          <Image src={logo} alt="OXVLO" height={22} width={Math.round((logo.width / logo.height) * 22)} />
        </Link>

        <Menu />

        <div className="flex gap-[14px] items-center">
          <span className="text-[15px] text-oxv-text-nav cursor-pointer">Sign In</span>
          <Button variant="primary" size="sm" href="/contact" className="oxv-button-primary-small">
            Get started
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
