import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      transitionDuration: {
        10000: '10000ms',
      },
      transitionProperty: {
        'width': 'width',
        'background': 'background-color',
      },
      width: {
        22: '5.5rem',
        30: '7.5rem',
        34: '8.5rem',
      },
      spacing: {
        23: '5.75rem',
      }
    },
  },
  plugins: [],
}
export default config
