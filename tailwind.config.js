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
					'50': '#f9f6ed',
					'100': '#f0e8d1',
					'200': '#e3d2a5',
					'300': '#d2b572',
					'400': '#c49a4b',
					'500': '#b5863d',
					'600': '#9a6932',
					'700': '#7d4f2b',
					'800': '#69422a',
					'900': '#5b3828',
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
