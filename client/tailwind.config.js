module.exports = {
	purge: ['./dist/*.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {
			animation: ['motion-reduce'],
		},
	},
	plugins: [],
};
