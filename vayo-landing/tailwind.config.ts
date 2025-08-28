import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff6b6b",
        secondary: "#ff9500",
        background: "#fef7f0",
        foreground: "#1a202c",
        coral: {
          50: "#fff5f5",
          100: "#fee8e8",
          200: "#ffc9c9",
          300: "#ff9999",
          400: "#ff6b6b",
          500: "#ff4545",
          600: "#e63939",
          700: "#cc2e2e",
          800: "#b32424",
          900: "#991a1a",
        },
        orange: {
          50: "#fff8ed",
          100: "#ffedc9",
          200: "#ffd9a0",
          300: "#ffc470",
          400: "#ffae3d",
          500: "#ff9500",
          600: "#e67e00",
          700: "#cc6900",
          800: "#b35500",
          900: "#994200",
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'bounce-light': 'bounceLight 1s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceLight: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
