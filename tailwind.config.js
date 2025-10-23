/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: '#5A1F1F',
        gold: '#D4AF37',
        ivory: '#F9F6EE',
        charcoal: '#1E1E1E',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #F4E5B1 100%)',
        'maroon-gradient': 'linear-gradient(135deg, #5A1F1F 0%, #8B3A3A 100%)',
        'hero-gradient': 'linear-gradient(135deg, rgba(90, 31, 31, 0.95) 0%, rgba(212, 175, 55, 0.85) 100%)',
      },
      boxShadow: {
        'gold': '0 10px 40px rgba(212, 175, 55, 0.3)',
      },
    },
  },
  plugins: [],
}
