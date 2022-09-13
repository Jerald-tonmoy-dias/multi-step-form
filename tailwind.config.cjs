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
      'active_number_color': "#989898",
      'deactive_number_color': "#9898984d",
      'deactive_text_color': "#0000004d",

    },
      height: {
        '250': '15.625rem',
        '500': '31.25rem'
      },
      width: {
        '700': '43.75rem',
        '120': '7.6875rem'
      },
      padding: {
        '150': '150px'
      },
      margin: {
        '80': '80px',
        '40': '40px',
      },
      borderRadius: {
        "20": "20px",
        "10": "10px"
      }
    },
  },
  plugins: [],
}


