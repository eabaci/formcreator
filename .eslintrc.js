module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true
	},
	extends: ['plugin:react/recommended'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
			modules: true
		},
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	plugins: ['react'],
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always']
	}
};
