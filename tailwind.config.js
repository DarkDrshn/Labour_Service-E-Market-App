/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  "frontend/node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
  "frontend/node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
});






// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}"
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

