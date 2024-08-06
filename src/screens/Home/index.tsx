import type { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { HomeParamList } from 'utils/navigation';

export const HomeScreen: FC = () => {
	const { navigate } = useNavigation<StackNavigationProp<HomeParamList>>();

	const handleDetailNavigate = () => {
		navigate('Detail');
	};

	return (
		<View style={styles.container}>
			<Text onPress={handleDetailNavigate}>HomeScreen</Text>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
