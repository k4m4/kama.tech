import { extendTheme } from '@chakra-ui/core';

const monoFontFamily = 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

const overrides = ({
	fonts: {
		heading: monoFontFamily,
		mono: monoFontFamily,
		body: '"Space Mono", monospace',
	},
	fontSizes: {
		xs: '0.75rem',
		sm: '0.875rem',
		md: '1rem',
		lg: '1.125rem',
		xl: '1.25rem',
		'2xl': '1.5rem',
		'3xl': '1.875rem',
		'4xl': '2.25rem',
		'5xl': '3rem',
		'6xl': '4rem',
	},
	sizes: {
		full: '100%',
		'3xs': '14rem',
		'2xs': '16rem',
		xs: '20rem',
		sm: '24rem',
		md: '28rem',
		lg: '32rem',
		xl: '36rem',
		'2xl': '42rem',
		'3xl': '48rem',
		'4xl': '56rem',
		'5xl': '64rem',
		'6xl': '72rem',
	},
	styles: {
		global: {
			'html, body': {
				bg: 'black',
			},
			'::selection': {
				bg: 'red.400',
			},
			'::-moz-selection': {
				bg: 'red.400',
			},
			'#nprogress .bar': {
				bg: 'white',
			},
			'.token-line:last-child': {
				maxHeight: 0,
			},
			'a > code': {
				color: 'red.400',
			},
			'a > code:hover': {
				color: 'white',
			},
		},
	},
	textStyles: {
		h1: {
			fontSize: '4xl',
			fontWeight: 'bold',
			lineHeight: 'taller',
			color: 'white',
		},
		h2: {
			fontSize: '3xl',
			fontWeight: 'semibold',
			lineHeight: 'tall',
			color: 'white',
		},
		h3: {
			fontSize: '2xl',
			fontWeight: 'medium',
			lineHeight: 'base',
			color: 'white',
		},
		h4: {
			fontSize: 'xl',
			fontWeight: 'medium',
			lineHeight: 'base',
			color: 'white',
		},
	},
});

const theme = extendTheme(overrides);

export default theme;
