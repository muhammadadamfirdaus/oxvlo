"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/assets/images/oxvlo-logo-transparent.png";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import Button from "@/app/components/utilities/Button";

function Header() {
  const refHeader = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (!refHeader.current) return;
      if (window.scrollY > 60) refHeader.current.classList.add("header-sticky");
      else if (window.scrollY < 5) refHeader.current.classList.remove("header-sticky");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="h-[48px] md:hidden" />

      <header ref={refHeader} className="fixed md:absolute top-0 inset-x-0 z-50 bg-oxv-background">
        <div className="flex items-center justify-between px-4 md:px-8 lg:px-14 py-3 border-b border-oxv-border-divider">
          <Link href="/">
            <Image src={logo} alt="OXVLO" height={22} width={Math.round((logo.width / logo.height) * 22)} />
          </Link>

          <div className="hidden md:block">
            <Menu />
          </div>

          <div className="hidden md:flex gap-[14px] items-center">
            <span className="text-[15px] text-oxv-text-nav cursor-pointer">Sign In</span>
            <Button variant="primary" size="sm" href="/contact" className="oxv-button-primary-small">
              Get started
            </Button>
          </div>

          <div className="md:hidden">
            <MenuMobile />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
