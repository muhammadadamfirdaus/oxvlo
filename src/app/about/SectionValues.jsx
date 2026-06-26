import IconShield from '@/assets/icons/IconShield';
import IconPlus from '@/assets/icons/IconPlus';
import IconCheckCircle from '@/assets/icons/IconCheckCircle';

const values = [
  {
    icon: <IconShield className="w-5 h-5" />,
    title: 'Own the outcome',
    description:
      "When something breaks at 3am, it's ours to fix — not yours to chase. We hold the whole stack, end to end.",
  },
  {
    icon: <IconPlus className="w-5 h-5" />,
    title: 'Keep it quiet',
    description:
      'Good infrastructure is the kind you forget is there. We measure ourselves by how little you have to think about us.',
  },
  {
    icon: <IconCheckCircle className="w-5 h-5" />,
    title: 'No vendor sprawl',
    description:
      'One team, one invoice, one place to call. The complexity stays on our side of the line, where it belongs.',
  },
];

function SectionValues() {
  return (
    <section className="px-14 py-[84px] border-t border-oxv-border-divider">
      <div className="font-mono text-[13px] tracking-[0.2em] uppercase text-oxv-accent mb-11">
        What we hold to
      </div>
      <div className="grid grid-cols-3 gap-6">
        {values.map(({ icon, title, description }) => (
          <div
            key={title}
            className="bg-oxv-background-surface border border-[#20232a] rounded-2xl p-8"
          >
            <div className="w-[46px] h-[46px] rounded-xl border border-oxv-border-subtle flex items-center justify-center mb-[22px] text-oxv-accent">
              {icon}
            </div>
            <h3 className="font-display text-[21px] font-semibold m-0 mb-[10px] text-oxv-text">
              {title}
            </h3>
            <p className="text-[15px] leading-[1.6] text-oxv-text-body m-0">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SectionValues;
