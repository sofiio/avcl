/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#00EFFF',
        customgrey: '#B1B4AD',
        customblue: '#5263CC', 
        customWhite: '#FCF8ED',
        customDarkBlue: '#040059'
      },
      fontFamily: {
        mrglovani: ['MyCustomFont'], // Add the font here
      },
      fontFamily: {
        arial: ['Arial'], // Add the font here
      },

      animation: {
        textMove: 'textMove 2s ease-in-out infinite',
      },
      keyframes: {
        textMove: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
