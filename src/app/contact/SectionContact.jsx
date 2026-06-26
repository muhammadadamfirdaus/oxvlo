'use client';

import { useState } from 'react';
import IconMail from '@/assets/icons/IconMail';
import IconWhatsapp from '@/assets/icons/IconWhatsapp';
import IconClock from '@/assets/icons/IconClock';
import IconCheck from '@/assets/icons/IconCheck';

const contactDetails = [
  {
    icon: <IconMail className="w-[18px] h-[18px]" />,
    label: 'Email',
    value: 'support@oxvlo.com',
  },
  {
    icon: <IconWhatsapp className="w-[18px] h-[18px]" />,
    label: 'WhatsApp',
    value: '+62 878-7070-0636',
  },
  {
    icon: <IconClock className="w-[18px] h-[18px]" />,
    label: 'Response time',
    value: 'Within one business day',
  },
];

function ContactDetail({ icon, label, value }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-[42px] h-[42px] rounded-[11px] border border-oxv-border-subtle bg-oxv-background-surface flex items-center justify-center shrink-0 text-oxv-accent">
        {icon}
      </div>
      <div>
        <div className="text-[13px] text-oxv-text-dim">{label}</div>
        <div className="text-base text-[#dfe2e7] font-medium">{value}</div>
      </div>
    </div>
  );
}

function SectionContact() {
  const [form, setForm] = useState({ name: '', email: '', org: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const fieldUpdate = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 left-1/2 -translate-x-1/2 w-screen oxv-background-grid pointer-events-none" />
      <div className="absolute top-[-200px] left-[18%] w-[680px] h-[520px] oxv-glow-orb-soft animate-oxv-glow pointer-events-none" />

      <div className="relative grid grid-cols-2 gap-[72px] px-14 py-24 pb-[110px] items-start">
        <div className="pt-[18px]">
          <div className="font-mono text-[13px] tracking-oxv-mono uppercase mb-5 text-oxv-accent">
            Contact
          </div>
          <h1 className="font-display font-semibold text-[56px] leading-[1.08] tracking-[-0.03em] m-0 max-w-[520px] oxv-text-gradient text-balance">
            Let&apos;s get your stack in order
          </h1>
          <p className="text-[19px] leading-[1.55] text-oxv-text-muted max-w-[440px] mt-[26px] mb-0">
            Tell us what you&apos;re running and what you need.
            <br />
            One team picks it up.
          </p>
          <div className="flex flex-col gap-[22px] mt-[52px]">
            {contactDetails.map((detail) => (
              <ContactDetail key={detail.label} {...detail} />
            ))}
          </div>
        </div>

        <div className="bg-oxv-background-surface border border-oxv-border rounded-[20px] p-10 shadow-[0_28px_70px_rgba(0,0,0,0.45)]">
          {submitted ? (
            <div className="min-h-[440px] flex flex-col items-center justify-center text-center gap-[18px]">
              <div className="w-[60px] h-[60px] rounded-full bg-[color-mix(in_srgb,var(--oxv-accent)_16%,transparent)] border border-oxv-accent flex items-center justify-center text-oxv-accent">
                <IconCheck className="w-7 h-7" />
              </div>
              <div className="font-display text-[26px] font-semibold text-oxv-heading">
                Message sent
              </div>
              <div className="text-[15px] text-oxv-text-muted max-w-[300px] leading-[1.55]">
                Thanks — we&apos;ve got it. Someone from our team will be in touch shortly.
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-[22px]">
              {[
                { id: 'name', label: 'Name', type: 'text', placeholder: 'What should we call you?' },
                { id: 'email', label: 'Email', type: 'email', placeholder: 'jane@company.com' },
                { id: 'org', label: 'Organization', sublabel: '/ Company', type: 'text', placeholder: 'Your Company Inc.' },
              ].map(({ id, label, sublabel, type, placeholder }) => (
                <div key={id} className="flex flex-col gap-[9px]">
                  <label className="text-[13px] font-semibold text-oxv-text-nav tracking-[0.01em]">
                    {label}{' '}
                    {sublabel && <span className="text-[#5b606a] font-normal">{sublabel}</span>}
                  </label>
                  <input
                    type={type}
                    value={form[id]}
                    onChange={fieldUpdate(id)}
                    placeholder={placeholder}
                    className="w-full bg-oxv-background border border-oxv-border-subtle rounded-[10px] px-4 py-[14px] text-[15px] text-oxv-text font-text oxv-input"
                  />
                </div>
              ))}

              <div className="flex flex-col gap-[9px]">
                <label className="text-[13px] font-semibold text-oxv-text-nav tracking-[0.01em]">
                  How can we help?
                </label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={fieldUpdate('message')}
                  placeholder="Tell us what you're running and what you need…"
                  className="w-full bg-oxv-background border border-oxv-border-subtle rounded-[10px] px-4 py-[14px] text-[15px] text-oxv-text font-text oxv-input resize-y leading-[1.5]"
                />
              </div>

              <button
                onClick={() => setSubmitted(true)}
                className="mt-1 w-full text-base font-bold text-oxv-accent-foreground bg-oxv-accent border-none py-4 rounded-[11px] cursor-pointer font-text oxv-button-primary hover:brightness-[1.06] transition-[filter]"
              >
                Send message
              </button>

              <div className="text-[12px] text-oxv-text-faint text-center">
                We&apos;ll never share your details. No spam, ever.
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default SectionContact;
