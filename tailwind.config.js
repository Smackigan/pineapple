/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				arial: ['Arial'],
				georgia: ['Georgia'],
			},
			boxShadow: {
				lg: '0 30px 40px 0 rgba(19, 24, 33, 0.06)',
			},
		},
	},
	plugins: [],
};

// box-shadow: 0px 30px 40px 0px rgba(19, 24, 33, 0.06);
