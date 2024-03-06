/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      fontSize: {
        "h1-title": ["clamp(2rem, 1.6919rem + 0.9859vw, 2.875rem)"],
        "sub-title": ["clamp(1.125rem, 1.059rem + 0.2113vw, 1.3125rem)"],
      },
      fontWeight: {
        "h1-title": "700",
      },
      colors: {
        "h1-title": "#333333",
        third: "#F2AD14",
        primary: "#003B73",
      },
    },
  },
  plugins: [],
};
