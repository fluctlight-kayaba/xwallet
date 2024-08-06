const { resolve } = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const isProd = process.env.ENV === 'production';

const minifyOption = {
	compress: true,
	mangle: true,
	format: { comments: false },
};

const swcOptions = () => ({
	jsc: {
		parser: {
			syntax: 'typescript',
			tsx: true,
			dynamicImport: true,
		},
		minify: isProd ? {} : minifyOption,
	},
	env: {
		targets: {
			chrome: '67',
			edge: '79',
			firefox: '68',
			opera: '54',
			safari: '14',
		},
	},
});

const copyAssets = (config) => {
	config.module.rules[1].use[1] = {
		loader: 'css-loader',
		options: { url: false },
	};

	config.plugins.push(
		new CopyPlugin({
			patterns: [
				{
					from: resolve(process.cwd(), 'assets/'),
					to: './',
					filter: (uri) => {
						const isTemplate = uri.endsWith('.ejs') || uri.endsWith('.sass');
						return !isTemplate;
					},
				},
			],
		}),
	);

	return config;
};

module.exports = {
	publicPath: () => process.env.PUBLIC_URL || '/',
	keepPreviousBuild: () => true,
	buildId: () => 'app',
	swcOptions,
	webpackMiddlewares: [copyAssets],
	moduleAlias: {
		global: {
			'react-native$': 'react-native-web',
		},
	},
};
