/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'BritishGreen': '#004225'
    },
    backgroundImage:{
      "hero-pattern": "url('./assets/HeroFormBg.jpg')"
    }
  },
  plugins: [],
  }
}
