// tailwind.config.ts
theme: {
  extend: {
    colors: {
      blockpixel: {
        bg: '#3F41C9',      // Azul violeta escuro fundo
        primary: '#5b5dff',  // Azul violeta claro
        accent: '#7e80ff',   // Neon/Brilho
      },
    },
    animation: {
      'glow': 'glow 4s ease-in-out infinite',
    },
    keyframes: {
      glow: {
        '0%, 100%': { opacity: '0.6' },
        '50%': { opacity: '1' },
      },
    },
  },
    }
    
