/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    '../../wcc/src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#F29C50',
          secondary: '#50D6F2',
          accent: '#5CF2BA',
          neutral: '#734A26',
          'base-100': '#FFFFFF',
          info: '#4478F2',
          success: '#47A682',
          warning: '#F9C446',
          error: '#F96546',
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
