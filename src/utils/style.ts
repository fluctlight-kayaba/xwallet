import { StyleSheet } from 'react-native';
import { DefaultTheme } from '@react-navigation/native';

export const colors = {
	primary: '#465be9',
	background: '#1a1a1a',
	inputBackground: '#24252c',
	bright: '#f8f3f9',
	text: '#ffffff',
	border: '#dedede',
	notification: '#ff0000',
};

export const constants = {
	pagePadding: 16,
	smallRadius: 8,
	mediumRadius: 10,
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

export const commonStyle = StyleSheet.create({
	textInput: {
		color: colors.text,
		backgroundColor: colors.inputBackground,
		borderRadius: constants.smallRadius,
		paddingHorizontal: 12,
		height: 32,
	},
	pageTitle: {
		color: colors.text,
		fontWeight: 500,
	},
	fieldTitle: {
		fontSize: 12,
		color: colors.text,
		marginBottom: 6,
	},
	fieldValue: {
		color: colors.text,
		backgroundColor: colors.inputBackground,
		borderRadius: constants.smallRadius,
		paddingVertical: 10,
		paddingHorizontal: 12,
		marginBottom: 18,
	},
});
