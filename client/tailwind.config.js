/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 30s linear infinite',
      },
      fontFamily: {
        
      }
    },
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
      'serif': ['Georgia', 'serif'],
      'MyCustomFont': ['path/to/my-custom-font.ttf', 'sans-serif'],
      'AnotherCustomFont': ['path/to/another-custom-font.ttf', 'serif']
    },
  },
  plugins: [],
}
