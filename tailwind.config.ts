/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}', './src/*.tsx'],
  theme: {
    extend: {},
  },
  plugins: ['@tailwindcss/line-clamp'],
};
