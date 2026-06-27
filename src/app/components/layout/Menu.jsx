"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import IconChevronDown from "@/assets/icons/IconChevronDown";
import IconCode from "@/assets/icons/IconCode";
import IconGrid from "@/assets/icons/IconGrid";
import IconShield from "@/assets/icons/IconShield";
import IconServer from "@/assets/icons/IconServer";
import IconMail from "@/assets/icons/IconMail";
import IconRefresh from "@/assets/icons/IconRefresh";
import IconBolt from "@/assets/icons/IconBolt";
import IconCheckCircle from "@/assets/icons/IconCheckCircle";

function ServiceIcon({ children }) {
  return <div className="w-8 h-8 rounded-[9px] border border-oxv-border-subtle flex items-center justify-center shrink-0 text-oxv-accent">{children}</div>;
}

function MenuSubProducts() {
  const services = [
    {
      label: "Domains",
      description: "Register, Renewal & Transfer",
      icon: <div className="w-[13px] h-[13px] rounded-full bg-oxv-accent" />,
    },
    {
      label: "Hosting",
      description: "Resilient Cloud",
      icon: (
        <div className="flex flex-col items-center gap-[3px]">
          <div className="w-[14px] h-[2.5px] rounded-sm bg-oxv-accent" />
          <div className="w-[14px] h-[2.5px] rounded-sm bg-oxv-accent" />
          <div className="w-[14px] h-[2.5px] rounded-sm bg-oxv-accent" />
        </div>
      ),
    },
    {
      label: "Web Development",
      description: "Design & build",
      icon: <IconCode className="w-[15px] h-[15px]" />,
    },
    {
      label: "SEO",
      description: "Rank & grow traffic",
      icon: (
        <div className="flex items-end justify-center gap-[2px] pb-[9px] w-full h-full">
          <div className="w-[3px] h-[6px] rounded-sm bg-oxv-accent" />
          <div className="w-[3px] h-[9px] rounded-sm bg-oxv-accent" />
          <div className="w-[3px] h-[13px] rounded-sm bg-oxv-accent" />
        </div>
      ),
    },
    {
      label: "AI Automation",
      description: "Agents & workflows",
      icon: <div className="w-[9px] h-[9px] rounded-full bg-oxv-accent oxv-glow-dot-small" />,
    },
  ];

  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[840px] bg-oxv-background-surface border border-oxv-border rounded-2xl shadow-[0_28px_70px_rgba(0,0,0,0.6)] p-[14px] grid grid-cols-[300px_1fr] gap-3 mt-[-1px]">
      <div className="flex flex-col gap-0.5">
        <div className="font-mono text-[11px] tracking-[0.18em] text-oxv-text-faint px-[14px] pt-[10px] pb-2">SERVICES</div>
        {services.map((item) => (
          <div key={item.label} className="flex items-center gap-3 px-[14px] py-[11px] rounded-[10px] cursor-pointer hover:bg-oxv-background-hover">
            <ServiceIcon>{item.icon}</ServiceIcon>
            <div>
              <div className="text-sm font-semibold text-oxv-text">{item.label}</div>
              <div className="text-xs text-oxv-text-dim">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="oxv-background-why-panel border border-oxv-border-promo rounded-xl p-6 flex flex-col gap-[18px]">
        <div className="font-mono text-[11px] tracking-[0.18em] text-oxv-accent">WHY OXVLO</div>
        <div className="flex gap-[14px]">
          <IconGrid className="w-[22px] h-[22px] shrink-0 mt-0.5 text-oxv-accent" />
          <div>
            <div className="text-[15px] font-semibold text-oxv-text mb-[3px]">One managed stack</div>
            <div className="text-[13px] leading-[1.55] text-oxv-text-body">Domains, hosting, SEO and AI run from a single platform — no vendor sprawl, one team to call.</div>
          </div>
        </div>
        <div className="flex gap-[14px]">
          <IconShield className="w-[22px] h-[22px] shrink-0 mt-0.5 text-oxv-accent" />
          <div>
            <div className="text-[15px] font-semibold text-oxv-text mb-[3px]">Monitored 24/7</div>
            <div className="text-[13px] leading-[1.55] text-oxv-text-body">Everything is watched, backed up, and supported by humans around the clock.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuSubSolutions() {
  const items = [
    { label: "Server Management", description: "Provisioned & patched", icon: <IconServer className="w-[15px] h-[15px]" /> },
    { label: "Email Setup", description: "Business mail & DNS", icon: <IconMail className="w-[15px] h-[15px]" /> },
    { label: "Security & SSL", description: "Certificates & hardening", icon: <IconShield className="w-[15px] h-[15px]" /> },
    { label: "Backups & Recovery", description: "Automated & restorable", icon: <IconRefresh className="w-[15px] h-[15px]" /> },
  ];

  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[840px] bg-oxv-background-surface border border-oxv-border rounded-2xl shadow-[0_28px_70px_rgba(0,0,0,0.6)] p-[14px] grid grid-cols-[300px_1fr] gap-3 mt-[-1px]">
      <div className="flex flex-col gap-0.5">
        <div className="font-mono text-[11px] tracking-[0.18em] text-oxv-text-faint px-[14px] pt-[10px] pb-2">WHAT WE MANAGE FOR YOU</div>
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-3 px-[14px] py-[11px] rounded-[10px] cursor-pointer hover:bg-oxv-background-hover">
            <ServiceIcon>{item.icon}</ServiceIcon>
            <div>
              <div className="text-sm font-semibold text-oxv-text">{item.label}</div>
              <div className="text-xs text-oxv-text-dim">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="oxv-background-why-panel border border-oxv-border-promo rounded-xl p-6 flex flex-col gap-[18px]">
        <div className="font-mono text-[11px] tracking-[0.18em] text-oxv-accent">TAILORED SETUP</div>
        <div className="flex gap-[14px]">
          <IconBolt className="w-[22px] h-[22px] shrink-0 mt-0.5 text-oxv-accent" />
          <div>
            <div className="text-[15px] font-semibold text-oxv-text mb-[3px]">Built around your team</div>
            <div className="text-[13px] leading-[1.55] text-oxv-text-body">We shape the stack to how you work — whether you're shipping your first site or running hundreds.</div>
          </div>
        </div>
        <div className="flex gap-[14px]">
          <IconCheckCircle className="w-[22px] h-[22px] shrink-0 mt-0.5 text-oxv-accent" />
          <div>
            <div className="text-[15px] font-semibold text-oxv-text mb-[3px]">A team that owns it</div>
            <div className="text-[13px] leading-[1.55] text-oxv-text-body">From migration to growth, our specialists handle the heavy lifting and stay on call.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Menu() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(null);

  const navLinkBase = "flex items-center gap-[6px] text-[15px] text-oxv-text-nav cursor-pointer px-[14px] py-[10px] rounded-lg hover:bg-oxv-background-hover transition-colors";
  const navLinkActive = "bg-oxv-background-hover text-oxv-text font-semibold";

  return (
    <div className="relative" onMouseLeave={() => setOpenMenu(null)}>
      <div className="flex gap-2 items-center">
        <div className={navLinkBase} onMouseEnter={() => setOpenMenu("products")}>
          <span>Products</span>
          <IconChevronDown className="w-3 h-3 transition-transform duration-200" style={openMenu === "products" ? { transform: "rotate(180deg)" } : undefined} />
        </div>
        <div className={navLinkBase} onMouseEnter={() => setOpenMenu("solutions")}>
          <span>Solutions</span>
          <IconChevronDown className="w-3 h-3 transition-transform duration-200" style={openMenu === "solutions" ? { transform: "rotate(180deg)" } : undefined} />
        </div>
        <Link href="/contact" className={`${navLinkBase} ${pathname === "/contact" ? navLinkActive : ""}`} onMouseEnter={() => setOpenMenu(null)}>
          Contacts
        </Link>
      </div>

      {openMenu === "products" && <MenuSubProducts />}
      {openMenu === "solutions" && <MenuSubSolutions />}
    </div>
  );
}

export default Menu;
