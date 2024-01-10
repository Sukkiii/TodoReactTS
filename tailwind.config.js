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
      },
      spacing: {
        'height-fix': '932px',
        // Iphone 14, 15 pro base border 8px
        // base: 932px
      },
      // text
      fontSize: {
        'size-main': ['1.5rem', '2rem'],
        'size-sub': ['0.9rem', '1.3rem'],
        'size-text': ['0.75rem', '1rem'],
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
        'main-light-color': '#FFBCC4',

        // 다크모드 배경색
        'dark-main-color': '#0f172a',
        'dark-light-color': '#cbd5e1',

        // 서브컬러 초록색
        'sub-color': '#D9D9D9',
        'sub-hover-color': '#9B9B9B',

        'black-color': '#111111',
        'light-gray-color': '#f2efef',
        'dark-gray-color': '#999999',
      },

      screens: {
        mobile: '430px',
        // => @media (min-width: 768px)
      },

      // animation
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-10deg)' },
          '50%': { transform: 'rotate(10deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 2s ease-in-out infinite',
        spinSlow: 'spin 15s linear infinite',
      },
    },
  },
  plugins: [],
}
