import type { NavigatorScreenParams } from '@react-navigation/native';
import { createNavigationContainerRef } from '@react-navigation/native';
import type { StackNavigationOptions } from '@react-navigation/stack';

export type HomeParamList = {
	Default: undefined;
	Detail: {
		id: string;
		address: string;
	};
};

export type RootParamList = {
	Home: NavigatorScreenParams<HomeParamList>;
};

export const noHeaderNavigation: StackNavigationOptions = {
	headerShown: false,
};

export const navigationRef = createNavigationContainerRef<RootParamList>();
