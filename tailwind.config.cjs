/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  
    extend: {
        colors: {
      'template_black': "#171A29",
      'template_section_bg_gray': "#F5F5F5",
      'template_btn_bg_gray': "#EEF0F3",
      'template_stroke_gray': "#E1E4EA",
    },
      height: {
        '250': '15.625rem',
        '500': '31.25rem'
      },
      width: {
        '700': '43.75rem'
      },
      padding: {
        '150': '150px'
      },
      borderRadius: {
        "20": "20px"
      }
    },
  },
  plugins: [],
}
