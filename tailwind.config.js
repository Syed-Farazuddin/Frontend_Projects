/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      lg: "1240px",
    },
    extend: {
      colors: {
        darkgrey: "hsl(0, 0%, 12%)",
        offblack: "hsl(0, 0%, 8%)",
        grey: "hsl(0, 0%, 20%)",
        green: "hsl(75, 94%, 57%)",
      },
      fontFamily: {
        body: ["Inter"],
      },
    },
  },
  plugins: [],
};
