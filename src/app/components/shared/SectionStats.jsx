'use client';

import { useRef, useEffect } from 'react';

const stats = [
  { target: 99.99, decimals: 2, suffix: '%', label: 'Uptime SLA', large: true },
  { target: 4.9, decimals: 1, suffix: '★', label: 'Client Rating', large: false },
  { target: 10, decimals: 0, suffix: '+', label: 'Years running', large: false },
  { target: 50, decimals: 0, suffix: '+', label: 'Integrations', large: false },
];

function animateCount(el, target, decimals, suffix, duration) {
  if (!el) return;
  const start = performance.now();
  const ease = (t) => 1 - Math.pow(1 - t, 3);
  const step = (now) => {
    const t = Math.min(1, (now - start) / duration);
    const value = target * ease(t);
    el.textContent = value.toFixed(decimals) + suffix;
    if (t < 1) requestAnimationFrame(step);
    else el.textContent = target.toFixed(decimals) + suffix;
  };
  requestAnimationFrame(step);
}

function SectionStats() {
  const refContainer = useRef(null);
  const refStats = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const container = refContainer.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            stats.forEach((stat, i) => {
              if (refStats[i].current) {
                refStats[i].current.textContent = (0).toFixed(stat.decimals) + stat.suffix;
              }
              animateCount(refStats[i].current, stat.target, stat.decimals, stat.suffix, 1300 + i * 120);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={refContainer} className="px-14 py-[76px] border-t border-oxv-border-divider">
      <div className="flex items-center justify-center gap-14 flex-wrap">
        {stats.map((stat, i) => (
          <div key={stat.label} className="flex items-center gap-14">
            {i > 0 && <div className="w-px h-16 bg-oxv-border" />}
            <div className="text-center w-[180px]">
              <div
                ref={refStats[i]}
                className={`font-display font-semibold leading-none tabular-nums ${
                  stat.large
                    ? 'text-[58px] tracking-[-0.02em] text-oxv-accent'
                    : 'text-[42px] text-oxv-heading'
                }`}
              >
                {stat.target.toFixed(stat.decimals) + stat.suffix}
              </div>
              <div className={`text-[13px] mt-2 ${stat.large ? 'text-oxv-text-muted' : 'text-oxv-text-dim'}`}>
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SectionStats;
