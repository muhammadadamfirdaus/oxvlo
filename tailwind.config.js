/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'oxv-background': '#0a0b0e',
        'oxv-background-surface': '#101216',
        'oxv-background-card': '#0e1014',
        'oxv-background-hover': '#15171c',
        'oxv-background-promo': '#15131f',
        'oxv-border': '#23262d',
        'oxv-border-subtle': '#2a2d34',
        'oxv-border-divider': '#15171b',
        'oxv-border-promo': '#2c2740',
        'oxv-text': '#eef0f3',
        'oxv-text-muted': '#9aa0a8',
        'oxv-text-dim': '#7f848d',
        'oxv-text-faint': '#6f747d',
        'oxv-text-nav': '#c8ccd2',
        'oxv-text-body': '#969ba3',
        'oxv-text-subtle': '#b6bbc3',
        'oxv-heading': '#f1f3f5',
        'oxv-accent': 'var(--oxv-accent)',
        'oxv-accent-foreground': '#0c1015',
      },
      fontFamily: {
        display: ['var(--oxv-font-display)'],
        text: ['var(--oxv-font-text)'],
        mono: ['var(--oxv-font-mono)'],
      },
      maxWidth: {
        'oxv-page': '1440px',
      },
      fontSize: {
        'oxv-hero': ['68px', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        'oxv-h2': ['44px', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'oxv-h2-lg': ['46px', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
      },
      animation: {
        'oxv-glow': 'oxvGlow 12s ease-in-out infinite',
        'oxv-marquee': 'oxvMarquee 36s linear infinite',
      },
      keyframes: {
        oxvGlow: {
          '0%, 100%': { opacity: '.38', transform: 'rotate(0deg) scale(1)' },
          '50%': { opacity: '.6', transform: 'rotate(40deg) scale(1.06)' },
        },
        oxvMarquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
