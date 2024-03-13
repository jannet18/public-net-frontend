/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        radarRotate: {
          "100%": {
            transform: "rotate(-360deg)",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-gradients")],
};
