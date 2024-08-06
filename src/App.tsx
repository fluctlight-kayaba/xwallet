import type { FC } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import ApplicationStack from 'stacks/App';
import { navigationRef } from 'utils/navigation';
import { navigationTheme } from 'utils/style';

export const AppContainer: FC = () => {
	return (
		<SafeAreaProvider>
			<NavigationContainer ref={navigationRef} theme={navigationTheme}>
				<ApplicationStack />
			</NavigationContainer>
		</SafeAreaProvider>
	);
};

export default AppContainer;
