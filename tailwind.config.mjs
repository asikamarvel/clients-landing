/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Charcoal dark grays — NOT pitch black. Inspired by thesherif.design
        surface: {
          DEFAULT: '#141416',   // rgb(20,20,22) — primary background
          50: '#18181b',        // slightly lifted
          100: '#202022',       // rgb(32,32,34) — card surfaces
          200: '#232527',       // rgb(35,38,39) — elevated cards/hover
          300: '#2a2a2e',       // borders
          400: '#38383c',       // prominent borders
        },
        // Navy blue from Omaxil Tech logo
        accent: {
          DEFAULT: '#2a3168',   // core navy
          light: '#3d4a8a',     // hover / lighter
          bright: '#4e5faa',    // links, highlights
          muted: 'rgba(42, 49, 104, 0.15)',
        },
        // Gold from logo X
        gold: {
          DEFAULT: '#c8a24e',
          light: '#d4b366',
        },
        // Text — softer, not harsh white
        text: {
          primary: '#e8e8ec',     // headings — warm off-white
          secondary: '#8a8a92',   // rgb(138,138,146) body — muted gray
          muted: '#5a5a62',       // captions, metadata
        },
      },
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        // Refined — NOT in your face. Lighter, smaller than before
        'hero': ['clamp(2rem, 4vw, 3.25rem)', { lineHeight: '1.15', letterSpacing: '-0.025em', fontWeight: '400' }],
        'hero-sub': ['clamp(0.975rem, 1.5vw, 1.125rem)', { lineHeight: '1.7' }],
        'section-title': ['clamp(1.5rem, 2.5vw, 2.25rem)', { lineHeight: '1.25', letterSpacing: '-0.015em' }],
      },
      spacing: {
        'section': 'clamp(5rem, 10vw, 8rem)',
        'section-sm': 'clamp(3rem, 6vw, 5rem)',
      },
      maxWidth: {
        'site': '1200px',
        'narrow': '680px',
      },
      borderRadius: {
        'card': '12px',
        'btn': '8px',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
