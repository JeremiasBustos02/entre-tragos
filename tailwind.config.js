/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0b0a0d",
        surface: "#131116",
        elevated: "#1b1820",
        text: {
          DEFAULT: "#f6f1ea",
          muted: "#c4bcb1",
        },
        accent: {
          DEFAULT: "#d1a56b", // Dorado premium
          hover: "#e1b77d",
        },
        border: {
          subtle: "rgba(246, 241, 234, 0.12)",
        }
      },
      fontFamily: {
        // Asegurate de importar estas fuentes en tu index.html o globals.css
        heading: ['Fraunces', 'Cormorant Garamond', 'serif'],
        body: ['Manrope', 'Source Sans 3', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 8px 24px rgba(5, 4, 8, 0.32)',
        'glow': '0 0 15px rgba(209, 165, 107, 0.15)', // Para toques sutiles
      },
      animation: {
        'fade-in': 'fadeIn 280ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-up': 'fadeUp 280ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}