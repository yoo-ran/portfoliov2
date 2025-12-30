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
        beige: 'rgb(var(--color-beige) / <alpha-value>)',
        black: 'rgb(var(--color-black) / <alpha-value>)',
        highlight: 'rgb(var(--color-highlight) / <alpha-value>)',
      },
      fontFamily: {
        body: ['var(--font-body)'],
        title: ['var(--font-title)'],
        label: ['var(--font-label)'],
        logo: ['var(--font-logo)'],
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        full: 'var(--radius-full)',
      },
    },
  },
  plugins: [],
};
export default config;
