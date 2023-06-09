module.exports = {
  darkMode:'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Lato':['Lato', 'sans-serif']
      }
    },
  },
  plugins: [require("daisyui")],
}
