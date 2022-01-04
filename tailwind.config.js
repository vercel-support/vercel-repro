module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1410px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        'base': 'var(--base-color)',
        'primary': 'var(--primary-color)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
