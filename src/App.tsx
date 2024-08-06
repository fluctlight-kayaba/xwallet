import type { FC } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import ApplicationStack from 'stacks/App';
import { navigationRef } from 'utils/navigation';

export const AppContainer: FC = () => {
	return (
		<SafeAreaProvider>
			<NavigationContainer ref={navigationRef}>
				<ApplicationStack />
			</NavigationContainer>
		</SafeAreaProvider>
	);
};

export default AppContainer;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
