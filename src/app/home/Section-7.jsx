import IconSearch from '@/assets/icons/IconSearch';
import IconAlignLeft from '@/assets/icons/IconAlignLeft';
import IconTrendingUp from '@/assets/icons/IconTrendingUp';

const cards = [
  {
    icon: <IconSearch className="w-5 h-5" />,
    title: 'Technical audits',
    description: 'We find and fix what holds your rankings back, from speed to structure.',
  },
  {
    icon: <IconAlignLeft className="w-5 h-5" />,
    title: 'Content & on-page',
    description: 'Pages and content written to rank and read well for the people you want.',
  },
  {
    icon: <IconTrendingUp className="w-5 h-5" />,
    title: 'Rank tracking',
    description: 'Clear reporting on where you stand and where you are heading, every month.',
  },
];

function Section7() {
  return (
    <section className="px-4 md:px-8 lg:px-14 py-12 md:py-16 lg:py-24 border-t border-oxv-border-divider">
      <div className="text-center max-w-[680px] mx-auto mb-[52px]">
        <div className="font-mono text-[15px] tracking-oxv-label mb-[10px] text-oxv-accent">
          SEO
        </div>
        <h2 className="font-display font-semibold text-[26px] md:text-[34px] lg:text-oxv-h2 m-0 mb-5 text-oxv-heading text-balance">
          Found by the people who matter
        </h2>
        <p className="text-[18px] leading-[1.6] text-oxv-text-muted m-0">
          Technical audits, content, and rank tracking that move real traffic — handled end to end
          by our team.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-[18px] max-w-[1080px] mx-auto">
        {cards.map(({ icon, title, description }) => (
          <div
            key={title}
            className="w-full md:flex-1 bg-oxv-background-surface border border-[#20232a] rounded-2xl p-7 oxv-service-card"
          >
            <div className="w-11 h-11 rounded-xl border border-oxv-border-subtle flex items-center justify-center mb-5 text-oxv-accent">
              {icon}
            </div>
            <h3 className="font-display text-[19px] font-semibold m-0 mb-[9px] text-oxv-text">{title}</h3>
            <p className="text-[14.5px] leading-[1.6] text-oxv-text-body m-0">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Section7;
