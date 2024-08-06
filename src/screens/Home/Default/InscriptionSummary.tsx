import type { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import RightArrowIcon from 'components/icon/RightArrow';
import { colors } from 'utils/style';
import type { InscriptionSummary } from 'utils/types';

type Props = {
	item: InscriptionSummary;
	onPress: (item: InscriptionSummary) => void;
};

export const InscriptionSummary: FC<Props> = ({ item, onPress }) => {
	return (
		<TouchableOpacity style={styles.container} onPress={() => onPress?.(item)}>
			<View style={styles.infoContainer}>
				<Text numberOfLines={1} style={styles.idText}>
					Inscription {item.id}
				</Text>
			</View>
			<RightArrowIcon />
		</TouchableOpacity>
	);
};

export default InscriptionSummary;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		minHeight: 50,
	},
	infoContainer: {
		flex: 1,
	},
	idText: {
		color: colors.text,
	},
});
