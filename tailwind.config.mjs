import { transform } from 'typescript'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		colors: {
		  primary: 'var(--primary)',
		  primaryDark: 'var(--primaryDark)',
		  primaryLight: 'var(--primaryLight)',
		  secondary: 'var(--secondary)',
		  secondaryDark: 'var(--secondaryDark)',
		  secondaryLight: 'var(--secondaryLight)',
		  accent: 'var(--accent)',
		  accentDark: 'var(--accentDark)',
		  accentLight: 'var(--accentLight)',
		},
		transitionTimingFunction: {
		  customEase1: 'var(--custom-ease-1)',
		  customEase2: 'var(--custom-ease-2)',
		  customEase3: 'var(--custom-ease-3)',
		  customEase4: 'var(--custom-ease-4)',
		},
		spacing: {
		  '2xs': 'var(--spacing-2xs)',
		  xs: 'var(--spacing-xs)',
		  s: 'var(--spacing-s)',
		  m: 'var(--spacing-m)',
		  l: 'var(--spacing-l)',
		  xl: 'var(--spacing-xl)',
		  '2xl': 'var(--spacing-2xl)',
		  '3xl': 'var(--spacing-3xl)',
		  '4xl': 'var(--spacing-4xl)',
		},
		fontSize: {
			'h1': ['3rem', { lineHeight: '1', fontWeight: '500', letterSpacing: '1.2px' }],
			'h2': ['clamp(1.75rem, 4vw + 0.5rem, 3.5rem)', { lineHeight: '1.2', fontWeight: '600' }],
			'h3': ['clamp(1.5rem, 3vw + 0.25rem, 3rem)', { lineHeight: '1.2', fontWeight: '600' }],
			'h4': ['clamp(1.25rem, 2.5vw + 0.125rem, 2.25rem)', { lineHeight: '1.2', fontWeight: '500' }],
			'h5': ['clamp(1rem, 2vw + 0.125rem, 1.5rem)', { lineHeight: '1.2', fontWeight: '500' }],
			'h6': ['clamp(0.875rem, 1.75vw + 0.125rem, 1.25rem)', { lineHeight: '1.2', fontWeight: '400' }],
			'subtitle': ['clamp(1.25rem, 2vw + 0.125rem, 1.75rem)', { lineHeight: '1.2', fontWeight: '500' }],
			'sh': ['clamp(0.875rem, 1.5vw + 0.125rem, 1.25rem)', { lineHeight: '2', fontWeight: '800', letterSpacing: '.4rem' }],
		  },
	  },
	},
	plugins: [],
  }
  