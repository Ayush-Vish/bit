/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",  "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    
    extend: {
      screens : {
        "extra_small" :"400px", 
        "xx_small" : "270px"
      }
    },
  },
  plugins: [],
}

