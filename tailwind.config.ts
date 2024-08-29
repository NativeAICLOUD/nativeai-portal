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
        'btn-color': "#031526",
        "border-color": '#283D3B'
      },
      backgroundImage: {
        'thumb-bg': "url('/img/bg-thumb.png')",
        'h1-linear': 'linear-gradient(90deg, #2a3a4a 0%, #0a3d6d 50%, #232f3e 100%)',
        'h2-linear': 'linear-gradient(90deg, #232f3e 0%, #0a3d6d 50%, #0a3d6d 100%)',
      },
      fontSize: {
        'xxxs': ['8px', '1'],
        'xxs': ['0.625rem', '1'],
        '3.5xl': ['32px', '1'],
        '4.5xl': ['2.5rem', '1'],
        '5.5xl': ['3.5rem', '1'],
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
      },
      zIndex: {
        1: '1',
        2: '2',
        51: '51',
        999: '999',
      },
      aspectRatio: {
        box: '4 / 3',
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
