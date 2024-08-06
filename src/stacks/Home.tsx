import type { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeDefaultScreen from 'screens/Home/Default';
import HomeDetailScreen from 'screens/Home/Detail';
import type { HomeParamList } from 'utils/navigation';

const Stack = createStackNavigator<HomeParamList>();

export const HomeStack: FC = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Default" component={HomeDefaultScreen} />
			<Stack.Screen name="Detail" component={HomeDetailScreen} />
		</Stack.Navigator>
	);
};

export default HomeStack;
