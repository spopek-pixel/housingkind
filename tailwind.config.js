/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#1B2140',
          800: '#242B52',
        },
        harbor: {
          50: '#EEF1FB',
          100: '#DCE2F6',
          200: '#B7C3ED',
          300: '#8FA1E2',
          400: '#5E72CB',
          500: '#3C4FA8',
          600: '#323F8B',
          700: '#2A3573',
          800: '#232B5C',
          900: '#1A2047',
        },
        clay: {
          50: '#FFF3E8',
          100: '#FFE3C7',
          200: '#FFCC9B',
          300: '#FCB06B',
          400: '#F4924A',
          500: '#E67635',
          600: '#C85E24',
          700: '#A2481B',
        },
        sage: {
          50: '#EFF6F1',
          400: '#6FA383',
          600: '#3F7A5B',
        },
        mist: {
          50: '#F7F8FC',
          100: '#EEF0F8',
          200: '#E2E5F3',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      boxShadow: {
        soft: '0 12px 32px -12px rgba(27, 33, 64, 0.18)',
        card: '0 4px 16px -4px rgba(27, 33, 64, 0.12)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
