/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'dark': '#1a1a1a', 
      },
      textColor: {
        'dark': '#ffffff', 
      },
    },
    plugins: [],
  }
}

