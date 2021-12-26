module.exports = {
  purge: [
    "./src/app.component.html, ./src/app.component.scss, tailwind.config.scss",
  ],
  darkMode: false, // or 'media' or 'class'
  content: ["./src/**/*.html, scss"],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
