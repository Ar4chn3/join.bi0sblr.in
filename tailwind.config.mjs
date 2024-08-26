/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				accent: "var(--sl-color-accent)"
			},
            fontFamily: {
                'technos': 'Technos, monospace',
                'krypton': 'Krypton, monospace'
            }
		},
	},
	plugins: [],
}
