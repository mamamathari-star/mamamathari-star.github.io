import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050505',
        pink: '#FF0055',
        white: '#FFFFFF',
        'grey-light': '#C0C0C0',
        'grey-mid': '#888888',
        blue: '#00E0FF',
        green: '#00FF6A',
        yellow: '#FFC82C',
        maroon: '#1a0010',
      },
      fontFamily: {
        display: ['Impact', 'Arial Black', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
