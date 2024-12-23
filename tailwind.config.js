module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'light-purple': '#5D348B',
        'green-500': '#05A563',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
