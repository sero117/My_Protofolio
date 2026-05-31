/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  safelist: [
    // Dynamic color classes used in project sections
    'text-emerald-400', 'text-violet-400', 'text-cyan-400', 'text-amber-400',
    'text-emerald-300', 'text-violet-300', 'text-cyan-300', 'text-amber-300',
    'border-emerald-500/20', 'border-violet-500/20', 'border-cyan-500/20', 'border-amber-500/20',
    'bg-emerald-500/10', 'bg-violet-500/10', 'bg-cyan-500/10', 'bg-amber-500/10',
    'text-gradient-violet', 'text-gradient-cyan', 'text-gradient-emerald', 'text-gradient-amber',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'Cascadia Code', 'monospace'],
      },
      colors: {
        navy: {
          950: '#060d1f',
          900: '#0a1020',
          800: '#0d1535',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 3s',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(0.8)' },
        },
      },
    },
  },
  plugins: [],
}
