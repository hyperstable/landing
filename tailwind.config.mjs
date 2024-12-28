/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'hs-blue-primary': 'rgba(0, 178, 255, 1)',
        'hs-blue-secondary': '#4F9AC6',
        'hs-card-bg': 'rgba(42, 68, 80, 1)',
        'hs-card-border': 'rgba(68, 93, 105, 1)',
        'hs-card-text': 'rgba(189, 228, 235, 1)',
        'hs-box-bg': 'rgba(255, 255, 255, 0.1)',
        'hs-box-title': 'rgba(255, 255, 255, 0.15)'
      },
    },
    fontFamily: {
      'sans': ["Readex Pro Variable", "sans-serif"],
    }
  },
  plugins: [],
}
