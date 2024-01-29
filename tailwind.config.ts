/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}', './src/*.tsx'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        example: {
          DEFAULT: 'red',
          100: 'var(--jdfkdjf)',
        },
      },
    },
  },
  plugins: ['@tailwindcss/line-clamp'],
};
