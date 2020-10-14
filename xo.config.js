module.exports = {
	extends: 'xo-react',
	envs: [
		'node',
		'browser',
	],
	rules: {
		'react/react-in-jsx-scope': 0,
		'object-curly-spacing': 0,
		'react/jsx-tag-spacing': 0,
		'react/boolean-prop-naming': 0,
		'import/extensions': [
			'error',
			{
				config: 'always',
				css: 'always',
				mdx: 'always',
			},
		],
		'comma-dangle': [
			'error',
			'always-multiline',
		],
	},
	overrides: [
		{
			files: 'utils/gtag.js',
			rules: {
				camelcase: 0,
			},
		},
		{
			files: 'components/atoms/google-analytics.js',
			rules: {
				'react/no-danger': 0,
			},
		},
		{
			files: 'components/organisms/hero.js',
			rules: {
				'react/no-danger': 0,
			},
		},
		{
			files: 'components/organisms/mdx-components.js',
			rules: {
				'react/no-array-index-key': 0,
			},
		},
		{
			files: 'pages/_app.js',
			rules: {
				'import/no-unassigned-import': 0,
			},
		},
	],
};
