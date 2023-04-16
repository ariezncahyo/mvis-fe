// const defaultConfig = require('tailwindcss/defaultConfig')
// const formsPlugin = require('@tailwindcss/forms')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"primary": {
					'50': "#F8F0FE",
          '100': "#EEDDFD",
          '200': "#DCBBFC",
          '300': "#CB99FA",
          '400': "#BA77F9",
          '500': "#A855F7",
          '600': "#8815F4",
          '700': "#6609BE",
          '800': "#44067F",
          '900': "#22033F",
          '950': "#120222"
				},
				'secondary': {
					'50': '#f5f5f5',
					'100': '#f0f0f0',
					'200': '#e4e4e4',
					'300': '#d1d1d1',
					'400': '#b4b4b4',
					'500': '#9a9a9a',
					'600': '#818181',
					'700': '#6a6a6a',
					'800': '#5a5a5a',
					'900': '#4e4e4e',
				},
			},
      backgroundImage: {
        'bimg-auth': "url('../../src/assets/bg-auth.jpg')",
        'bimg-auth-overlay': "url('../../src/assets/bg-auth-overlay.png')",
        'bimg-auth-circle': "url('../../src/assets/bg-auth-circle.png')",
      }
		}
	},
	plugins: [],
}
