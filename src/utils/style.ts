import { DefaultTheme } from '@react-navigation/native';

export const colors = {
	primary: '#465be9',
	background: '#1a1a1a',
	bright: '#f8f3f9',
	text: '#ffffff',
	border: '#dedede',
	notification: '#ff0000',
};

export const navigationTheme = {
	...DefaultTheme,
	dark: true,
	colors: {
		...DefaultTheme.colors,
		primary: colors.primary,
		background: colors.background,
		card: colors.background,
		text: colors.text,
		border: colors.border,
		notification: colors.notification,
	},
};
