/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'custom-gradient': 'linear-gradient(87.56deg, #1A8FE3 1.79%, rgba(26, 143, 227, 0) 383.1%)',
      }),
    },
  },
  plugins: [],
}

