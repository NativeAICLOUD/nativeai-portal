import type { Config } from "tailwindcss";
const { fontFamily } = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--font-montserrat)', fontFamily.sans],
      },
      colors: {
        primary: '#283D3B',
        secondary: '#031526',
        native: '#F89201',
        'native-text': '#162435',
        'native-btn': '#0A1624',
        'native-btn-text': '#383838',
        'native-btn-blue': '#1b3b58',
        'native-btn-blue-hover': '#1E1E1E',
        'btn-color': "#031526",
        'btn-color-hover': "#001c3d",
        "border-color": '#283D3B',
        'circle-grey': '#48515E',
        'footer': '#203d5d',
        'tooltip-border': '#eee3',
        'tooltip-border-dark': '#75757533',
      },
      backgroundImage: {
        'orange-gradient': "url('/img/BG.png')",
        'orange3-gradient': "url('/img/BG3.png')",
        'text-linear': 'linear-gradient(90deg, #E5A003 0%, #FCC980 50%, #F89201 100%)',
        'h1-linear': 'linear-gradient(90deg, #2a3a4a 0%, #0a3d6d 50%, #232f3e 100%)',
        'h2-linear': 'linear-gradient(90deg, #232f3e 0%, #0a3d6d 50%, #0a3d6d 100%)',
        'solution-text-linear': 'linear-gradient(90deg, #1E1E1E 0%, #2573BA 100%)',
        'workshop-text-linear': 'linear-gradient(90deg, #3A506B 0%, #131C28 100%)',
        'gtouch-bg-linear': 'linear-gradient(to bottom, #142335 0%, #2b384b 80%)',
        'service-text-linear': 'linear-gradient(89.99deg, #E5A003 3.46%, #FBC980 22.53%, #F89201 45.05%)',
        'main-gradient': 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
        'main-card': 'linear-gradient(to right, #003140, #203d5d), url(/img/noise-background.jpg)',
        'main-light-card': 'linear-gradient(to right, #37424f, #35404e), url(/img/noise-background.jpg)',
        'two-color': 'linear-gradient(to bottom, #232F3E 50%, #283647 50%)',
        'azure-bg-opacity': 'linear-gradient(to left, #ffffff00 0%, rgb(255 255 255 / 90%) 60%), linear-gradient(to top, rgb(255 255 255) 65%,  #ffffff00 72%, #ffffff00 100%)'
      },
      fontSize: {
        'xxxs': ['8px', '1'],
        'xxs': ['0.625rem', '1'],
        '2.5xl': ['26px', '1'],
        '3.5xl': ['32px', '1'],
        '4.5xl': ['2.5rem', '1'],
        '5.5xl': ['3.5rem', '1'],
        '6xl': ['3.875rem', '1'],
        '7.5xl': ['5rem', '1'],
      },
      minHeight: {
        'btn-sm': '40px',
        'btn-md': '48px',
        'btn-lg': '56px',
        'btn-xl': '64px',
        nav: '130px',
        'nav-shrink': '90px',
      },
      minWidth: {
        'btn-sm': '140px',
        'btn-md': '200px',
        'btn-lg': '260px',
      },
      maxWidth: {
        referral: '1100px',
        '8xl': '1360px',
        '9xl': '1520px',
      },
      borderRadius: {
        '14': '0.875rem',
        '20': '1.25rem',
        '28': '1.75rem',
        '40': '2.5rem',
      },
      dropShadow: {
        social: '0 10px 16px 0 rgba(0, 0, 0, 0.04)',
      },
      spacing: {
        15: '3.75rem',
      },
      scale: {
        80: '0.80',
      },
      boxShadow: {
        tooltip: 'hsl(206 22% 7% / 35%) 0px 6px 18px -6px, hsl(206 22% 7% / 20%) 0px 6px 12px -15px',
        'tooltip-dark': 'hsl(0deg 1.72% 48.91% / 35%) 0px 10px 38px -10px, hsl(0deg 0% 100% / 20%) 0px 10px 20px -15px',
        partner: '0 1px 6px 4px rgb(83 83 83 / 10%), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        about: "0px 0px 20px 0px #00000040"
      },
      zIndex: {
        1: '1',
        2: '2',
        51: '51',
        999: '999',
      },
      aspectRatio: {
        box: '4 / 3',
        thumbnail: '16 / 6',
        postimg: '4 / 2'
      },
      keyframes: {
        slideDownAndFade: {
          from: { opacity: '0', transform: 'translateY(-2px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeftAndFade: {
          from: { opacity: '0', transform: 'translateX(2px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideUpAndFade: {
          from: { opacity: '0', transform: 'translateY(2px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideRightAndFade: {
          from: { opacity: '0', transform: 'translateX(-2px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        slideDownAndFade: 'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideLeftAndFade: 'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideRightAndFade: 'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
export default config;
