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
		'@typescript-eslint/comma-dangle': 0,
		'comma-dangle': [
			'error',
			{
				arrays: 'always-multiline',
				objects: 'always-multiline',
				imports: 'always-multiline',
				exports: 'always-multiline',
				functions: 'never',
			},
		],
		'react/jsx-max-props-per-line': [
			'error',
			{
				maximum: 1,
				when: 'always',
			},
		],
		'react/jsx-closing-bracket-location': [
			'error',
			{
				location: 'tag-aligned',
			},
		],
		'import/order': [
			'error',
			{
				groups: [
					'builtin',
					'external',
					'internal',
					'parent',
					'sibling',
					'index',
					'object',
				],
				alphabetize: {
					order: 'asc',
					caseInsensitive: true,
				},
			},
		],
		'react/jsx-sort-props': [
			'error',
			{
				callbacksLast: true,
				shorthandFirst: true,
				reservedFirst: true,
			},
		],
	},
	overrides: [
		{
			files: 'utils/gtag.ts',
			rules: {
				camelcase: 0,
			},
		},
		{
			files: 'components/atoms/google-analytics.tsx',
			rules: {
				'react/no-danger': 0,
			},
		},
		{
			files: 'components/organisms/hero.tsx',
			rules: {
				'react/no-danger': 0,
			},
		},
		{
			files: 'components/organisms/mdx-components.tsx',
			rules: {
				'react/no-array-index-key': 0,
			},
		},
		{
			files: 'pages/_app.tsx',
			rules: {
				'import/no-unassigned-import': 0,
			},
		},
	],
};
