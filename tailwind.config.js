/** @type {import('tailwindcss').Config} */
import flowbitePlugin from 'flowbite/plugin';
export default {
  // content: [
  //   "./pages/**/*.{js,ts,jsx,tsx}",
  //   "./components/**/*.{js,ts,jsx,tsx}",
  // ],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbitePlugin
  ],
}

