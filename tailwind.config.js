/** @type {import('tailwindcss').Config} */

export const darkMode = ['class'];
export const content = ['.storybook/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'];
export const theme = {
	container: {
		center: true,
		padding: '2rem',
		screens: {
			'2xl': '1400px',
		},
	},
	extend: {
		colors: {
			border: 'hsl(var(--border))',
			input: 'hsl(var(--input))',
			ring: 'hsl(var(--ring))',
			background: 'hsl(var(--background))',
			foreground: 'hsl(var(--foreground))',
			primary: {
				DEFAULT: 'hsl(var(--primary))',
				foreground: 'hsl(var(--primary-foreground))',
			},
			secondary: {
				DEFAULT: 'hsl(var(--secondary))',
				foreground: 'hsl(var(--secondary-foreground))',
			},
			destructive: {
				DEFAULT: 'hsl(var(--destructive))',
				foreground: 'hsl(var(--destructive-foreground))',
			},
			muted: {
				DEFAULT: 'hsl(var(--muted))',
				foreground: 'hsl(var(--muted-foreground))',
			},
			accent: {
				DEFAULT: 'hsl(var(--accent))',
				foreground: 'hsl(var(--accent-foreground))',
			},
			popover: {
				DEFAULT: 'hsl(var(--popover))',
				foreground: 'hsl(var(--popover-foreground))',
			},
			card: {
				DEFAULT: 'hsl(var(--card))',
				foreground: 'hsl(var(--card-foreground))',
			},
		},
		borderRadius: {
			lg: 'var(--radius)',
			md: 'calc(var(--radius) - 2px)',
			sm: 'calc(var(--radius) - 4px)',
		},
		// animations
		keyframes: {
			columnSelection: {
				'0%': { transform: 'translateX(20px)', opacity: '0' },
				'100%': { transform: 'translateX(0px)', opacity: '1' },
			},
			rowSelection: {
				'0%': { transform: 'translateY(10px)', opacity: '0' },
				'100%': { transform: 'translateY(0px)', opacity: '1' },
			},
			bounce: {
				'0%, 100%': { transform: 'translateY(-90%)' },
				'50%': { transform: 'translateY(10%) scaleY(0.80)' },
			},
		},
		animation: {
			columnSelection: 'columnSelection 0.1s ease-in-out forwards',
			rowSelection: 'rowSelection 0.1s ease-in-out forwards',
			bounce1: 'bounce 1s infinite',
			bounce2: 'bounce 1s infinite 0.2s',
			bounce3: 'bounce 1s infinite 0.4s',
		},
	},
};
export const plugins = [
	// eslint-disable-next-line no-undef
	require('tailwindcss-animate'),
];
