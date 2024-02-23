/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'background': '#E1F1FD',
        'blues': '#170072',
        'bluesa': '#4663AC',
        'bluesk': '#9BB1D0',
        'bluesi': '#FFFFFF',
      },
      fontFamily: {
        'krona-one': ['"Krona One"', 'sans-serif'],
        'luckiest-guy': ['"Luckiest Guy"', 'cursive'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
