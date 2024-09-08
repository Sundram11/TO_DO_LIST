/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',    // Small screens
      'md': '768px',    // Medium screens
      'lg': '1024px',   // Large screens
      'xl': '1280px',   // Extra large screens
      '2xl': '1536px',  // 2x Extra large screens
      '3xl': '1600px',  // Custom breakpoint (3x Extra large screens)
      '4xl': '1920px',  // Another custom breakpoint (4x Extra large screens)
    },
    extend: {},
  },
  plugins: [],
}

