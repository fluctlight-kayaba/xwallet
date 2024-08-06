import type { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const HomeDetailScreen: FC = () => {
	return (
		<View style={styles.container}>
			<Text>HomeDetailScreen</Text>
		</View>
	);
};

export default HomeDetailScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
