/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#2b2b2b',
        accent: '#A259FF',
      },
      backgroundImage: {
        auction: "url('@/assets/images/auction-bg.png')",
      },
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        xl: '1080px',
      },
    },
    fontFamily: {
      'space-mono': ['Space Mono', 'sans-serif'],
    },
    screens: {
      xxl: { max: '1280px' },
      xl: { max: '992px' },
      lg: { max: '870px' },
      md: { max: '640px' },
      sm: { max: '576px' },
      xs: { max: '475px' },
    },
  },
}
