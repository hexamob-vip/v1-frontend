/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        secondary: ["var(--font-libre-baskerville)", "serif"],
        type1: ['"Tomato Grotesk Extra Light"', "sans-serif"],
        type2: ['"Tomato Grotesk Light"', "sans-serif"],
      },
      colors: {
        rojo: "#f32735",
        azul: "#011c4d",
        gris: "#d5d5d5",
        page: "#0d0d0d",
        white: "#ffffff",
        gold: {
          50: "#fdf9f3",
          100: "#f8f0e2",
          200: "#eedfc4",
          300: "#e0c896",
          400: "#cfad68",
          500: "#bc9140",
          600: "#a37b36",
          700: "#946832",
          800: "#7a5628",
          900: "#5f451f",
          950: "#453318",
        },
        goldhigh: {
          50: "#fffef5",
          100: "#fffce8",
          200: "#fff8c1",
          300: "#fff29a",
          400: "#ffe973",
          500: "#ffd700",
          600: "#e6c200",
          700: "#ccad00",
          800: "#b39900",
          900: "#998500",
          950: "#4d4200",
        },
        golden: {
          light: "#ede0c4",
          DEFAULT: "#bc9140",
          dark: "#946832",
          darker: "#5f451f",
        },
        amber: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
          950: "#451a03",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gold-gradient":
          "linear-gradient(135deg, #ede0c4 0%, #bc9140 50%, #946832 100%)",
      },
      boxShadow: {
        gold: "0 4px 14px 0 rgba(188, 145, 64, 0.32)",
        "gold-lg": "0 10px 40px 0 rgba(188, 145, 64, 0.42)",
      },
    },
  },
  plugins: [],
};
