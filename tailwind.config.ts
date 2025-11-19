import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        beige: 'rgb(var(--beige) / <alpha-value>)',
        beige70: 'rgb(var(--beige-70) / <alpha-value>)',
        black: 'rgb(var(--black) / <alpha-value>)',
        highlight: 'rgb(var(--highlight) / <alpha-value>)',
      },
    },
  },
  plugins: [],
};
export default config;
