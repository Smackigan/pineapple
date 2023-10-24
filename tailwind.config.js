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
		screens: {
			sm: '375px',
			md: '834px',
			lg: '1920px',
		},
		backgroundImage: {
			main: "url('../public/img/image_summer.png')",
			gradient: 'linear-gradient(180deg, #FFF 0%, #F2F5FA 100%)',
		},
	},
	plugins: [],
};

// box-shadow: 0px 30px 40px 0px rgba(19, 24, 33, 0.06);
