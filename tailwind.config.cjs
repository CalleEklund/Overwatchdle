/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'mainbg': "url('../images/bg-image.jpg')"
      },
      colors: {
        orange: "#f99e1a",
        gray: "#43484c",
        darkblue: "#405275",
        blue: "#218ffe",
        black: "#000000"
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        "fade-in": "fade-in 0.75s ease-out",
      },
    },

  },
  plugins: [],
};
