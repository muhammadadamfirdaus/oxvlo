"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Button from "@/app/components/utilities/Button";
import IconChevronDown from "@/assets/icons/IconChevronDown";

const productLinks = [
  { label: "Domains", description: "Register, Renewal & Transfer" },
  { label: "Hosting", description: "Resilient Cloud" },
  { label: "Web Development", description: "Design & build" },
  { label: "SEO", description: "Rank & grow traffic" },
  { label: "AI Automation", description: "Agents & workflows" },
];

const solutionLinks = [
  { label: "Server Management", description: "Provisioned & patched" },
  { label: "Email Setup", description: "Business mail & DNS" },
  { label: "Security & SSL", description: "Certificates & hardening" },
  { label: "Backups & Recovery", description: "Automated & restorable" },
];

function MenuMobile() {
  const [open, setOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
    setExpandedSection(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const toggleSection = (section) =>
    setExpandedSection((prev) => (prev === section ? null : section));

  return (
    <>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex flex-col gap-[5px] justify-center items-center w-10 h-10"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        <span
          className="block w-5 h-[1.5px] bg-oxv-text-nav rounded-sm transition-transform duration-300"
          style={{ transform: open ? "translateY(6.5px) rotate(45deg)" : "none" }}
        />
        <span
          className="block w-5 h-[1.5px] bg-oxv-text-nav rounded-sm origin-left transition-all duration-200"
          style={{ transform: open ? "scaleX(0)" : "scaleX(1)", opacity: open ? 0 : 1 }}
        />
        <span
          className="block w-5 h-[1.5px] bg-oxv-text-nav rounded-sm transition-transform duration-300"
          style={{ transform: open ? "translateY(-6.5px) rotate(-45deg)" : "none" }}
        />
      </button>

      {open && (
        <div className="fixed top-[47px] inset-x-0 bottom-0 z-40 bg-oxv-background flex flex-col">
          <div className="overflow-y-auto px-2 mt-12 flex flex-col gap-0.5">
            <button
              onClick={() => toggleSection("products")}
              className="flex items-center justify-between w-full text-left px-3 py-[13px] rounded-lg text-[16px] text-oxv-text-nav hover:bg-oxv-background-hover transition-colors"
            >
              <span>Products</span>
              <IconChevronDown
                className="w-4 h-4 transition-transform duration-200 shrink-0"
                style={expandedSection === "products" ? { transform: "rotate(180deg)" } : undefined}
              />
            </button>

            {expandedSection === "products" && (
              <div className="pl-3 mb-1 flex flex-col gap-0.5">
                {productLinks.map((item) => (
                  <div key={item.label} className="px-3 py-[10px] rounded-lg hover:bg-oxv-background-hover transition-colors cursor-pointer">
                    <div className="text-[15px] text-oxv-text font-medium">{item.label}</div>
                    <div className="text-[13px] text-oxv-text-dim">{item.description}</div>
                  </div>
                ))}
              </div>
            )}

            <button
              onClick={() => toggleSection("solutions")}
              className="flex items-center justify-between w-full text-left px-3 py-[13px] rounded-lg text-[16px] text-oxv-text-nav hover:bg-oxv-background-hover transition-colors"
            >
              <span>Solutions</span>
              <IconChevronDown
                className="w-4 h-4 transition-transform duration-200 shrink-0"
                style={expandedSection === "solutions" ? { transform: "rotate(180deg)" } : undefined}
              />
            </button>

            {expandedSection === "solutions" && (
              <div className="pl-3 mb-1 flex flex-col gap-0.5">
                {solutionLinks.map((item) => (
                  <div key={item.label} className="px-3 py-[10px] rounded-lg hover:bg-oxv-background-hover transition-colors cursor-pointer">
                    <div className="text-[15px] text-oxv-text font-medium">{item.label}</div>
                    <div className="text-[13px] text-oxv-text-dim">{item.description}</div>
                  </div>
                ))}
              </div>
            )}

            <Link
              href="/contact"
              className={`px-3 py-[13px] rounded-lg text-[16px] no-underline transition-colors block ${
                pathname === "/contact"
                  ? "text-oxv-text font-semibold bg-oxv-background-hover"
                  : "text-oxv-text-nav hover:bg-oxv-background-hover"
              }`}
            >
              Contact
            </Link>
          </div>

          <div className="mt-auto px-4 py-6 border-t border-oxv-border-divider flex flex-col gap-3 shrink-0">
            <span className="text-[15px] text-oxv-text-nav text-center cursor-pointer">Sign In</span>
            <Button variant="primary" size="md" href="/contact" className="oxv-button-primary w-full text-center block">
              Get started
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default MenuMobile;