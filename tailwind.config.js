/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'heading': '#323b4b',
        'blurColor': '#8a94a6',
        'buttonColor': '#f0f5fa',
        'blue': '#377dff'
      },
      fontSize:{
        'base': '1.625rem',
        'blur': '1.125rem'
      },
      fontWeight:{
        'heading': '700',
        'blurWeight': '500'
      }
    },
  },
  plugins: [],
  fontFamily: {
    sans: ['Inter', 'sans'],
  },
}

