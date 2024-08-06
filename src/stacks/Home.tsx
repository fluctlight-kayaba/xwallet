import type { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from 'screens/Home';
import HomeDetailScreen from 'screens/Home/Detail';
import type { HomeParamList } from 'utils/navigation';

const Stack = createStackNavigator<HomeParamList>();

export const HomeStack: FC = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Default" component={HomeScreen} />
			<Stack.Screen name="Detail" component={HomeDetailScreen} />
		</Stack.Navigator>
	);
};

export default HomeStack;
