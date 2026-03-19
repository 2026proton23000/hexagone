/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'industriel': {
          900: '#0f172a', // Navy très sombre
          800: '#1e293b',
          500: '#3b82f6', // Bleu technique
          400: '#60a5fa',
        }
      },
    },
  },
  plugins: [],
}