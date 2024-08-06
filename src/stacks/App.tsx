import type { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeStack from 'stacks/Home';
import type { RootParamList } from 'utils/navigation';
import { noHeaderNavigation } from 'utils/navigation';

const Stack = createStackNavigator<RootParamList>();

export const ApplicationStack: FC = () => {
	return (
		<Stack.Navigator screenOptions={noHeaderNavigation}>
			<Stack.Screen name="Home" component={HomeStack} />
		</Stack.Navigator>
	);
};

export default ApplicationStack;
