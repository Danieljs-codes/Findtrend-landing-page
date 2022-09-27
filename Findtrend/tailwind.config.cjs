/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
  ],
   theme: {
    fontFamily: {
        sans: ["effra_trial", "Avenir", "Helvetica", "Arial", "sans-serif"],
      },
    extend: {
      colors: {
        "transparent-white": "rgba(255, 255, 255, 0.87)",
        "primary-green": "#A8FF35",
        "secondary - green": "#87D322",
        "green-hover": "#8CC83A",
        "grey-1": "#FFFDFC",
        "grey-2": "#ADADAD",
        "grey-3": "#F5F5F5",
        "grey-4": "#8B8B8B",
      },
      backgroundImage: {
        'bg': "url('./src/images/bg.png')",
      },
      maxWidth: {
        'text': '18rem',
        'larger-text': '38rem',
        'medium-text': '28rem',
        'desktop-screen': '1440px',
    },
    },
  },
  plugins: [],
};
