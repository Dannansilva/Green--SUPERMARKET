import type { Config } from 'tailwindcss'

const config: Config = {
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
      colors: {
        Gray: '#666666',
        Gray2:'#4D4D4D',
        Green: '#2DC653',
        DarkGreen: '#265932',
        Lightgray: '#999999',
        Lightgray2:'#E6E6E6',
        Black1:'#1A1A1A',

      },
      screens: {
        'sm': '300px', 
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      
    },
  },
  plugins: [],
}
export default config
