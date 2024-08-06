import type {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const HomeScreen: FC = () => {
	return (
		<View style={styles.container}>
			<Text>HomeScreen</Text>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
