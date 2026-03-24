/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        cyber: {
          black: '#050508',
          dark: '#0a0a12',
          card: '#0d0d1a',
          border: '#1a1a2e',
          cyan: '#00f5ff',
          magenta: '#ff0080',
          green: '#39ff14',
          yellow: '#ffff00',
          purple: '#bf5af2',
          text: '#e0e0ff',
          muted: '#6b6b9a',
        },
        light: {
          bg: '#f0f4ff',
          card: '#ffffff',
          border: '#d0d8f0',
          text: '#0a0a2e',
          muted: '#6070a0',
          accent: '#0055ff',
        }
      },
      animation: {
        'glitch': 'glitch 2s infinite',
        'scan': 'scan 8s linear infinite',
        'pulse-neon': 'pulseNeon 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'blink': 'blink 1s step-end infinite',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        glitch: {
          '0%, 90%, 100%': { transform: 'translate(0)', filter: 'none' },
          '91%': { transform: 'translate(-2px, 0)', filter: 'hue-rotate(90deg)' },
          '93%': { transform: 'translate(2px, 0)', filter: 'hue-rotate(-90deg)' },
          '95%': { transform: 'translate(-1px, 0)', filter: 'hue-rotate(45deg)' },
          '97%': { transform: 'translate(1px, 0)', filter: 'none' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        pulseNeon: {
          '0%, 100%': { 
            boxShadow: '0 0 5px #00f5ff, 0 0 10px #00f5ff, 0 0 20px #00f5ff',
          },
          '50%': { 
            boxShadow: '0 0 10px #00f5ff, 0 0 25px #00f5ff, 0 0 50px #00f5ff',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'grid-cyber': `linear-gradient(rgba(0, 245, 255, 0.03) 1px, transparent 1px), 
                       linear-gradient(90deg, rgba(0, 245, 255, 0.03) 1px, transparent 1px)`,
        'grid-light': `linear-gradient(rgba(0, 85, 255, 0.05) 1px, transparent 1px), 
                       linear-gradient(90deg, rgba(0, 85, 255, 0.05) 1px, transparent 1px)`,
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
    },
  },
  plugins: [],
}
