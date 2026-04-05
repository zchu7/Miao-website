import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#eef1f8',
          100: '#d5dcee',
          200: '#abbad0',
          300: '#7b94b4',
          400: '#4f6f96',
          500: '#2e4d78',
          600: '#1f3560',
          700: '#1a2744',
          800: '#131d33',
          900: '#0c1220',
        },
        gold: {
          50:  '#fdf8ec',
          100: '#f9edcc',
          200: '#f0d48a',
          300: '#e6ba4d',
          400: '#c9a84c',
          500: '#b08d35',
          600: '#8f6f22',
          700: '#6e5219',
          800: '#4d380f',
          900: '#2c1f06',
        },
      },
      fontFamily: {
        sans:  ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #1a2744 0%, #0c1220 60%, #1a2744 100%)',
      },
    },
  },
  plugins: [],
}

export default config
