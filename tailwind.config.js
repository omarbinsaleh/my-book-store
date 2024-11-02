/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'primary-1' : '#23BE0A',
        'secondary-1' : '#59C6D2',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

