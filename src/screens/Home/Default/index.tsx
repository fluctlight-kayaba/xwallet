import type { FC } from 'react';
import type { ListRenderItem } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { useInput } from 'utils/hooks';
import { useRemoteInscriptionList } from 'utils/hooks/inscription';
import type { HomeParamList } from 'utils/navigation';
import { commonStyle, constants } from 'utils/style';
import type { InscriptionSummary } from 'utils/types';

import Inscription from './Inscription';

export const HomeScreen: FC = () => {
	const addressInput = useInput('');
	const { navigate } = useNavigation<StackNavigationProp<HomeParamList>>();
	const { loading, data } = useRemoteInscriptionList(addressInput.value);

	const navigateToDetail = (id: string) => {
		navigate('Detail', {
			id: id,
			address: addressInput.value,
		});
	};

	const renderInscription: ListRenderItem<InscriptionSummary> = ({ item }) => {
		return <Inscription item={item} onPress={navigateToDetail} />;
	};

	return (
		<View style={styles.container}>
			<Text style={commonStyle.pageTitle}>Owner Bitcoin Address:</Text>
			<TextInput style={commonStyle.textInput} {...addressInput} />
			{loading ? (
				<View style={styles.loadingContainer}>
					<ActivityIndicator color="#fffff" />
				</View>
			) : (
				<View style={styles.resultContainer}>
					<Text style={commonStyle.pageTitle}>Results</Text>
					<FlatList data={data?.results} renderItem={renderInscription} />
				</View>
			)}
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: constants.pagePadding,
		gap: 12,
		paddingTop: 32,
	},
	loadingContainer: {
		flex: 1,
	},
	resultContainer: {
		flex: 1,
	},
});
