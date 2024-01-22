/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				disabled: "rgb(156 163 175 / 1)",
			},
		},
	},
	plugins: [],
};
