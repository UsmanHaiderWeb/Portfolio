/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '800px',
      md: '1000px',
      lg: '1100px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      screens: {
        lgtab: { max: '800px', min: '651px' },
        tablet: { max: '650px', min: '551px' },
        mini: { max: '550px', min: '451px' },
        mobile: { max: '450px', min: '360px' },
        micro: { max: '359px', min: '0px' },
      },
      colors: {
        base: '#050505',
        surface: '#0d0d0f',
        'surface-2': '#141418',
        muted: '#6b6b76',
        // full Active-Theory neon set
        neon: {
          cyan: '#06b6d4',
          magenta: '#e018c8',
          lime: '#9bf60a',
        },
        // kept for backward references
        accent: '#06b6d4',
        'accent-dim': '#0891b2',
      },
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        techno: ['"Chakra Petch"', 'ui-monospace', 'monospace'],
        sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"Chakra Petch"', 'ui-monospace', 'monospace'],
        rej: ['rej', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
