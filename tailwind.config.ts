/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-orange": "hsl(22, 65%, 57%)",
        "light-orange": "hsl(21, 94%, 75%)",
        "main-grey": "hsl(0, 0%, 95%)",
        "light-grey": "hsl(0, 0%, 98%)",
      },
      fontSize: {
        "app-h1": [
          "3.5rem",
          {
            lineHeight: "3.625rem",
            letterSpacing: "0.125em",
            fontWeight: "700",
          },
        ],
        "app-h2": [
          "2.5rem",
          {
            lineHeight: "2.75rem",
            letterSpacing: "0.094em",
            fontWeight: "700",
          },
        ],
        "app-h3": [
          "2rem",
          {
            lineHeight: "2.25rem",
            letterSpacing: "0.072em",
            fontWeight: "700",
          },
        ],
        "app-h4": [
          "1.75rem",
          {
            lineHeight: "1.75rem",
            letterSpacing: "0.125rem",
            fontWeight: "700",
          },
        ],
        "app-h5": [
          "1.5rem",
          {
            lineHeight: "2.063rem",
            letterSpacing: "0.106rem",
            fontWeight: "700",
          },
        ],
        "app-h6": [
          "1.125rem",
          {
            lineHeight: "1.5rem",
            letterSpacing: "0.081rem",
            fontWeight: "700",
          },
        ],
        "app-overline": [
          "0.875rem",
          {
            lineHeight: "1.188rem",
            letterSpacing: "0.625rem",
            fontWeight: "400",
          },
        ],
        "app-subtitle": [
          "0.813rem",
          {
            lineHeight: "1.563rem",
            letterSpacing: "0.063rem",
            fontWeight: "700",
          },
        ],
        "app-body": [
          "0.938rem",
          {
            lineHeight: "1.563rem",
            letterSpacing: "0.063rem",
            fontWeight: "500",
          },
        ],
      },
    },
  },
  plugins: [],
};
