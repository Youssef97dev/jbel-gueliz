/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        color_black: "var(--black)",
        color_white: "var(--white)",
        background: "var(--background)",
        button: "var(--button)",
        star: "var(--star)",
        text_star: "var(--text-star)",
        card: "var(--card-bg)",
        feature: "var(--bg-feature)",
      },
    },
  },
  plugins: [],
};
