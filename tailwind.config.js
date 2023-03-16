module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      // animations
      animation: {
        fade: 'fadeOut 6s ease-in-out',
        'fade-transparent': 'fadeOutTransparent 6s ease-in-out',
        reveal: 'revealFromBlack 2s ease-in-out',
        floating: 'floating 3s infinite ease-in-out',
      },
      keyframes: () => ({
        fadeOut: {
          '0%': { backgroundColor: '#212121' },
          '50%': { backgroundColor: '#212121' },
          '100%': { backgroundColor: '#000' },
        },
        fadeOutTransparent: {
          '0%': { opacity: '1' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        revealFromBlack: {
          '0%': { backgroundColor: 'rgba(0,0,0,1)' },
          '20%': { backgroundColor: 'rgba(0,0,0,1)' },
          '100%': { backgroundColor: 'rgba(0,0,0,0)' },
        },
        floating: {
          '0%, 100%': { transform: 'translateY(-1.75%)' },
          '50%': { transform: 'translateY(1.75%)' },
        },
      }),
      // gradient bg
      backgroundImage: {
        'gradient-radial-shadow':
          'radial-gradient(ellipse at center, #111111 0%, #212121 70%)',
      },
      // colors
      colors: {
        brand: {
          900: '#368e4c',
          800: '#286638',
          100: '#41a75b',
          'neon-dark': '',
          'neon-light': '',
          black: '#0a0a0a',
        },
        primary: {
          100: '#E6F6FE',
          200: '#C0EAFC',
          300: '#9ADDFB',
          400: '#4FC3F7',
          500: '#03A9F4',
          600: '#0398DC',
          700: '#026592',
          800: '#014C6E',
          900: '#013349',
        },
        gray: {
          1000: '#121212',
          900: '#181818',
          800: '#212121',
          700: '#2b2b2b',
          600: '#333333',
          500: '#424242',
          400: '#4c4c4c',
          300: '#565656',
          200: '#636363',
          100: '#aaaaaa',
        },
      },
      // other
      lineHeight: {
        hero: '4.5rem',
      },
    },
  },
  variants: {},
  plugins: [],
};
