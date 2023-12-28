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
        Gray3:'#333333', 
        Green: '#2DC653',
        Green2:'#00B207',
        DarkGreen: '#265932',
        DarkGreen2:'#173B1A',
        Lightgray: '#999999',
        Lightgray2:'#E6E6E6',
        Lightgray3:"#F2F2F2",
        Lightgray4:'#808080',
        Black1:"#1A1A1A",
        LightRed:"#EA4B48",
        Yellow:"#FFD449",

      },
      screens: {
        'sm': '320px', 
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      
      
    },
  },
  plugins: [],
}
export default config
