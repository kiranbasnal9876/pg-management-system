/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-bs-theme="dark"]'],
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // Professional Radiant & Deep Blues
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb', // Core Primary Blue
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        // Midnight Navy Palette for Dark Mode
        navy: {
          50: '#f0f4f9',
          100: '#e1e9f2',
          200: '#c3d3e6',
          300: '#95b3d4',
          400: '#618dc0',
          500: '#3d6ea8',
          600: '#2d548b',
          700: '#254471',
          800: '#1c2b50', // Elevated card / surface
          900: '#111d38', // Dark card background
          950: '#0b132b', // Deep Midnight root background
        },
        darkbg: {
          root: '#080e1e',
          card: '#0f1a34',
          cardHover: '#162447',
          subtle: '#1a294d',
          border: '#1f3460',
          borderSubtle: '#182849',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'glow-blue': '0 0 20px -5px rgba(37, 99, 235, 0.4)',
        'glow-cyan': '0 0 20px -5px rgba(6, 182, 212, 0.4)',
        'dark-card': '0 4px 20px -2px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}
