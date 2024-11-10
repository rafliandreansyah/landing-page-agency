/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#28CB8B",
        secondary: "#263238",
        info: "#2194f3",
        black: "#263238",
        d_grey: "#4D4D4D",
        grey: "#717171",
        l_grey: "#89939E",
        grey_blue: "#ABBED1",
        silver: "#F5F7FA",
        shade1: "#43A046",
        shade2: "#388E3B",
        shade3: "#237D31",
        shade4: "#1B5E1F",
        shade5: "#103E13",
        tint1: "#66BB69",
        tint2: "#81C784",
        tint3: "#A5D6A7",
        tint4: "#C8E6C9",
        tint5: "#E8F5E9",
        warning: "#FBC02D",
        error: "#E53835",
        success: "#2E7D31",
      },
      fontSize: {
        "2xl": ["28px", "36px"],
        "3xl": ["36px", "44px"],
        "4xl": ["64px", "76px"],
      },
      fontFamily: {
        sans: ["Regular", "sans-serif"],
        semibold: ["SemiBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
