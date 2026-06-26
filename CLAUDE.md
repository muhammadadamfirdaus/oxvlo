# OXVLO

OXVLO is a digital services company providing domains, hosting, web development, SEO, and AI automation to modern businesses. Currently has a marketing website with a landing page, about page, and contact page.

## Tech Stack

- Next.js 15.0.3 (App Router, Server Components)
- React 18.2 (JSX, no TypeScript)
- Tailwind CSS + SCSS
- No React Query — uses Next.js `fetch` with `revalidate` + `unstable_cache`

## Project Structure

```
src/
├── app/
│   ├── layout.js             Root layout (Header, Footer)
│   ├── page.js               Home (/)
│   ├── home/                 No route — holds home page section components
│   │   ├── Section-1.jsx     Hero
│   │   ├── Section-2.jsx     Client logo marquee
│   │   ├── Section-3.jsx     Journey (3 steps)
│   │   ├── Section-4.jsx     Domains feature
│   │   ├── Section-5.jsx     Hosting feature
│   │   ├── Section-6.jsx     Web Development feature
│   │   ├── Section-7.jsx     SEO feature
│   │   └── Section-8.jsx     AI Automation feature
│   ├── about/
│   │   ├── page.js           About (/about)
│   │   ├── SectionHero.jsx
│   │   ├── SectionStory.jsx
│   │   └── SectionValues.jsx
│   ├── contact/
│   │   ├── page.js           Contact (/contact)
│   │   └── SectionContact.jsx
│   ├── assets/
│   │   ├── css/all.scss      Master compiled CSS — DO NOT EDIT
│   │   └── css/style.scss    Custom styles (write here)
│   └── components/
│       ├── layout/
│       │   ├── Header.jsx    Logo + renders Menu + action buttons (server)
│       │   ├── Menu.jsx      Mega dropdown menus + active nav (client)
│       │   └── Footer.jsx    5-column footer (server)
│       ├── utilities/
│       │   ├── Button.jsx    Variants: primary / secondary; sizes: sm / md / lg
│       │   └── Icon.jsx      Wrapper div, default w-4 h-4
│       └── shared/
│           ├── SectionStats.jsx    Counter animation on scroll (client); reused on home + about
│           └── SectionBanner.jsx   Promotional banner (server); accepts heading/subheading/button props
└── assets/
    └── icons/                Icon components — Icon<Name>.jsx × 20
```

## Naming Convention

General → specific → action (last). Examples:

- `product`
- `productAdd`
- `productDelete`

Applies to: variables, functions, API service methods, file names.

React refs follow the same rule — general → specific:

- `refModal` — a ref to a modal element
- `refInputSerialEnd` — a ref to the end serial input

Home page sections use numbered files: `Section-1.jsx`, `Section-2.jsx`, etc. (general `Section` first, number as the specific part).

Other page sections use descriptive names with general first: `SectionHero`, `SectionStory`, `SectionValues`, `SectionContact`, `SectionStats`, `SectionBanner`.

## Components — Utilities

Always reuse from `src/app/components/utilities/`. Never duplicate:

- `Button.jsx` — button with primary/secondary variants and sm/md/lg sizes
- `Icon.jsx` — icon wrapper div with default w-4 h-4

## Icons

All icons are React components in `src/assets/icons/`, named `Icon<Name>.jsx`. Never define inline SVG inside component files.

Two-layer architecture:

- **`src/app/components/utilities/Icon.jsx`** — base wrapper; handles the `div` container with default `w-4 h-4`, accepts `className` prop
- **`src/assets/icons/Icon<Name>.jsx`** — named icon; imports `Icon`, spreads all props, contains only the SVG markup

```jsx
// src/assets/icons/IconDownload.jsx
import Icon from "@/app/components/utilities/Icon";

function IconDownload(props) {
  return (
    <Icon {...props}>
      <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none">
        <path d="..." fill="currentColor" />
      </svg>
    </Icon>
  );
}

export default IconDownload;
```

Rules:

- SVG always uses `width="100%" height="100%"` — sizing is controlled by the `Icon` wrapper
- Use `fill="currentColor"` or `stroke="currentColor"` for icons that inherit color
- Override size at usage via `className`: `<IconCalendar className="w-3 h-3" />`

## Styles

- Write custom styles in `src/app/assets/css/style.scss`
- Never edit `src/app/assets/css/all.scss` (compiled master)
- Use Tailwind utility classes first; fallback to SCSS for complex cases
- No inline `style={{}}` attributes — use Tailwind classes or SCSS named classes
- SCSS prefix: `oxv-` for all custom classes (e.g. `.oxv-text-gradient`, `.oxv-glow-dot`)
- Tailwind token prefix: `oxv-` for all custom colors and values (e.g. `bg-oxv-background`, `text-oxv-accent`)

## CSS Custom Properties (set in `:root` via style.scss)

```
--oxv-accent: #16c8a8
--oxv-font-display: -apple-system, BlinkMacSystemFont, 'SF Pro Display', ...
--oxv-font-text: -apple-system, BlinkMacSystemFont, 'SF Pro Text', ...
--oxv-font-mono: ui-monospace, 'SF Mono', Menlo, Monaco, monospace
```

## Routes

- `/` — home (landing page)
- `/about` — about page
- `/contact` — contact page

## Dev

```bash
npm install
npm run dev   # starts on port 3000 (uses Turbopack)
```
