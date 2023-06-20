import { type Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6A983C',
        'primary-dark': '#46760A',
        'primary-darker': '#3B6507',
        black: '#221F1F'
      }
    }
  },
  plugins: []
} satisfies Config
