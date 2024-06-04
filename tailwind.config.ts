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
        23: '5.75rem',
        26: '6.5rem',
        29: '7.25rem',
        30: '7.5rem',
        33: '8.25rem',
        34: '8.5rem',
        35: '8.75rem',
        37: '9.25rem',
        38: '9.5rem',
      },
      spacing: {
        23: '5.75rem',
      },
      keyframes: {
        fadeOut: {
            '0%': { opacity: '100%' },
            '100%': { opacity: '0%' },
        },
      },
      animation: {
        'fade-out': 'fadeOut 0.5s ease-out forwards',
      },
      colors: {
        mygrad: {
          0: '#4f46e5',
          10: '#5d43da',
          20: '#6b40cf',
          30: '#793dc4',
          40: '#873ab9',
          50: '#9537ae',
          60: '#a334a3',
          70: '#b13198',
          80: '#bf2e8d',
          90: '#bf2e8d',
          100: '#db2777',
        }
      }
    },
  },
  plugins: [],
}
export default config
