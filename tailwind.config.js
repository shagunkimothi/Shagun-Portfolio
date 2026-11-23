/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FFF9F5',
        blush: '#F8E8EB',
        rose: '#D99AA8',
        burgundy: '#9E536B',
        ink: '#49343C',
        muted: '#78656D',
        line: '#E9D5D0',
        highlight: '#F1DCE1'
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        mono: ['DM Mono', 'ui-monospace', 'monospace']
      }
    }
  },
  plugins: []
}
