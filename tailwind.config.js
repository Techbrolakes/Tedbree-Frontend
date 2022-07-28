/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: () => ({
        "auth-hero": 'url("/images/auth-hero.png")',
        "auth-image": 'url("/images/auth-image.png")',
      }),
      colors: {
        a100: "#F9FBFD",
      },
      backgroundSize: {
        half: "80%",
      },
    },
  },
  plugins: [],
};
