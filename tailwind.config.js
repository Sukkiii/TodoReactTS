/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  important: true,
  darkMode: 'class',
  theme: {
    extend: {
      width: {
        'width-fix': '430px',
        // Iphone 14, 15 pro base border 8px
        // base: 430px
        profile: '16.19rem',
        profileImg: '7.44rem',
      },
      height: {
        profileImg: '7.44rem',
      },
      spacing: {
        'height-fix': '932px',
        // Iphone 14, 15 pro base border 8px
        // base: 932px
        sm: '0.75rem',
        middle: '1.25rem',
        big: '1.5rem',
      },
      // text
      fontSize: {
        'size-main': ['1.75rem', '2rem'],
        'size-sub': ['1.25rem', '1.5rem'],
        'size-text': ['0.9rem', '1.3rem'],
        'size-text-sm': ['0.75rem', '1rem'],
      },
      // rounded
      borderRadius: {
        'button-radius': '0.75rem',
        'big-radius': '1rem',
        'small-radius': '0.375rem',
        'image-radius': '0.625rem',
      },
      // bg, text
      colors: {
        'main-color': '#ff98a4',
        'main-hover-color': '#FF5E70',
        'main-light-color': '#FFC7CE',

        // 다크모드 배경색
        'dark-main-color': '#0f172a',
        'dark-light-color': '#818894',

        'sub-color': '#D9D9D9',
        'sub-hover-color': '#8F8F8F',

        'black-color': '#2D3E59',
        'light-gray-color': '#f2efef',
        'dark-gray-color': '#999999',

        // clover color
        'clover-pink': '#F38194',
        'clover-yellow': '#F5C23A',
        'clover-skyblue': '#91CBD9',
        'clover-green': '#60AA25',
        'clover-sub': '#D9D9D9',
      },

      screens: {
        mobile: '430px',
        // => @media (min-width: 768px)
      },

      // animation
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 7s ease-in-out infinite',
        spinSlow: 'spin 15s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
}
