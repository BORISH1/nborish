// tailwind.config.js
module.exports = {
  // ... other config
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'spin-slow-reverse': 'spin 15s linear infinite reverse',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      borderWidth: {
        '6': '6px',
      },
    },
  },
}