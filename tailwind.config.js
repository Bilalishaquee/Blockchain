/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc5fb',
          400: '#36a9f7',
          500: '#0c8ee7',
          600: '#0070c9',
          700: '#0158a3',
          800: '#064a86',
          900: '#0a3d6f',
          950: '#072547',
        },
        secondary: {
          50: '#f4f1ff',
          100: '#ebe5ff',
          200: '#d9ceff',
          300: '#bea6ff',
          400: '#a175ff',
          500: '#8445ff',
          600: '#7923ff',
          700: '#6910eb',
          800: '#570cbe',
          900: '#480c9b',
          950: '#2e0069',
        },
        dark: {
          100: '#d1d5db',
          200: '#9ca3af',
          300: '#6b7280',
          400: '#4b5563',
          500: '#1f2937',
          600: '#111827',
          700: '#0f172a',
          800: '#0b1120',
          900: '#030712',
        }
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'twinkle': 'twinkle 4s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(79, 70, 229, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.8)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        twinkle: {
          '0%, 100%': { opacity: 0.2 },
          '50%': { opacity: 1 }
        }
      },
      backgroundImage: {
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M0 0v1h1V0H0zm1 1v1h1V1H1zm1 0h1V0H2v1zm0 1h1v1H2V2zm1 0v1h1V2H3zm1 0h1V1H4v1zm0 1h1v1H4V3zm1 0v1h1V3H5zm1 0h1V2H6v1zm0 1h1v1H6V4zm1 0v1h1V4H7zm1 0h1V3H8v1zm0 1h1v1H8V5zm1 0v1h1V5H9zm1 0h1V4h-1v1zm0 1h1v1h-1V6zm1 0v1h1V6h-1zm1 0h1V5h-1v1zm0 1h1v1h-1V7zm1 0v1h1V7h-1zm1 0h1V6h-1v1zm0 1h1v1h-1V8zm1 0v1h1V8h-1zm1 0h1V7h-1v1zm0 1h1v1h-1V9zm1 0v1h1V9h-1zm1 0h1V8h-1v1zm0 1h1v1h-1v-1zm1 0v1h1v-1h-1zm1 0h1V9h-1v1zm0 1h1v1h-1v-1zm1 0v1h1v-1h-1zm1 0h1v-1h-1v1z' fill='%23333' fill-opacity='0.03'/%3E%3C/svg%3E\")"
      }
    },
  },
  plugins: [],
};