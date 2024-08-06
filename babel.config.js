module.exports = {
	presets: ['module:@react-native/babel-preset'],
	plugins: [
		[
			'module-resolver',
			{
				alias: {
					components: './src/components',
					screens: './src/screens',
					stacks: './src/stacks',
					utils: './src/utils',
					state: './src/state',
					assets: './src/assets',
				},
			},
		],
		['react-native-reanimated/plugin'],
	],
};
