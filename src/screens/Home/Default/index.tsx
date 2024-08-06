import type { FC } from 'react';
import type { ListRenderItem } from 'react-native';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { inscriptionState } from 'state/inscription';
import type { HomeParamList } from 'utils/navigation';
import { commonStyle, constants } from 'utils/style';
import type { InscriptionSummary } from 'utils/types';
import { useSnapshot } from 'valtio';

import InscriptionSummary from './InscriptionSummary';

export const HomeScreen: FC = () => {
	const { navigate } = useNavigation<StackNavigationProp<HomeParamList>>();
	const { items: inscriptions } = useSnapshot(inscriptionState);

	const navigateToDetail = (item: InscriptionSummary) => {
		navigate('Detail', {
			id: item.id,
			address: 'bc1pe6y27ey6gzh6p0j250kz23zra7xn89703pvmtzx239zzstg47j3s3vdvvs',
		});
	};

	const renderInscription: ListRenderItem<InscriptionSummary> = ({ item }) => {
		return <InscriptionSummary item={item} onPress={navigateToDetail} />;
	};
	return (
		<View style={styles.container}>
			<Text style={commonStyle.pageTitle}>Owner Bitcoin Address:</Text>
			<TextInput style={commonStyle.textInput} />
			<Text style={commonStyle.pageTitle}>Results</Text>
			<FlatList data={inscriptions} renderItem={renderInscription} />
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: constants.pagePadding,
		gap: 12,
	},
});
