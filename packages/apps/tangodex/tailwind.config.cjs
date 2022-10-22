/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        black: '#0d0d0d',
        neutral: '#eff0f3',
        primary: '#ff8e3c',
        white: '#fffffe',
      },
      fontSize: {
        xxs: '.5rem',
      },
    },
  },
  plugins: [],
}
