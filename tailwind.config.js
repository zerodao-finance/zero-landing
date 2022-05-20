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
      backgroundImage: {
        'gradient-radial-shadow':
          'radial-gradient(ellipse at center, #000000 0%, #212121 70%)',
      },
      colors: {
        brand: {
          900: '#368e4c',
          100: '#41a75b',
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
          900: '#121212',
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
      lineHeight: {
        hero: '4.5rem',
      },
    },
  },
  variants: {},
  plugins: [],
};
