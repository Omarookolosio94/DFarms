/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: () => ({
        brand: "#eb8b22",
        "light-brand": '#ffdc4e',
        shade: "#f5f5f5",
        green: "#27BE63",
        "black-shade": "#808080",
        "gray": "#7D8184",
        black: "#333333"
      }),
      fontFamily: {
        "ui-sans":
          "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans- serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
    },
  },
  plugins: [],
};
