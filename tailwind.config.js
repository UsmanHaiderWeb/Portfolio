/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '800px',
      'md': '1000px',
      'lg': '1100px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      screens: {
        "lgtab": {'max': '800px', 'min': '651px'},
        "tablet": {'max': '650px', 'min': '551px'},
        "mini": {'max': '550px', 'min': '451px'},
        "mobile": {'max': '450px', 'min': '360px'},
        "micro": {'max': '359px', 'min': '0px'},
      }
    },
  },
  plugins: [],
}

