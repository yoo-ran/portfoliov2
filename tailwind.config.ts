import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      md: '768px',
      lg: '1280px',
      xl: '1728px',
    },
    extend: {
      colors: {
        beige: 'rgb(var(--beige) / <alpha-value>)',
        black: 'rgb(var(--black) / <alpha-value>)',
        highlight: 'rgb(var(--highlight) / <alpha-value>)',
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
