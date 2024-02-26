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
        'bluesa': '#9BB1D0',
        'bluesk': '#4663AC',
        'bluesi': '#FFFFFF',
        'darkblue': '#170072',
        'lgtblue': '#0070E0',
        'lgtbluebg': '#D3E4F4',
        'darkbluebg': '#C5D7EB',
        'greenapr': '#009F5C',
        'grays': '#A0A0A0',
        'reds': '#E00000', 
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
