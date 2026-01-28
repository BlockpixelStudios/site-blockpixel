// tailwind.config.ts
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blockpixel: {
          bg: '#3F41C9',      // O fundo oficial
          primary: '#5b5dff',  // O roxo neon
          accent: '#7e80ff',
        },
      },
    },
  },
  plugins: [],
}
