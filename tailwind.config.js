/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        body:["Kotta One"],
      },
      backgroundColor:{
        back:["#D5F4FF"],
        gray:["#2C333B"]
      },
      colors:{
        gray:["#2C333B"]
      },
      borderColor:{
        gray:["#2C333B"]
      }
    },
  },
  plugins: [],
}

