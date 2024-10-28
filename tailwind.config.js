/** @type {import('tailwindcss').Config} */
export default {
     content: [
          "./index.html",
          "./src/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
          extend: {
               fontFamily: {
                    'Changa': ['"Changa"', 'sans-serif'],
                    "Inter": ["Inter", "sans-serif"],
                    "Karla": ["Karla", "sans-serif"],
                    "openSans": ["Open Sans", "sans-serif"],
                    'dancing': ['Dancing Script', 'cursive'],
                    'Poppins': ["Poppins", "sans-serif"]
               }
          },
     },
     plugins: [],
}