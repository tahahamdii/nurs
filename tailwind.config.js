/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      linearGradientColors: {
        'blue-purple': 'linear-gradient(270deg, #5974E9 0%, #9859E9 100%)',
      },
      colors: {
        'Background':'#fff',
        'NormalHeader':'#5974E9',
        'SmallText':'#01166F70',
        'LogoText':'#9859E9 ',

      }
    },
  },
  plugins: [require('tailwindcss-gradients')],
}

