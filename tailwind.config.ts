import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blockpixel: {
          bg: '#3F41C9',
          primary: '#5b5dff',
          accent: '#7e80ff',
        },
      },
    },
  },
  plugins: [],
};
export default config;
