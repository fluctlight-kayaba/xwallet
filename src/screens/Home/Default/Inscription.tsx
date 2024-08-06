import type { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import RightArrowIcon from 'components/icon/RightArrow';
import { shortId } from 'utils/helper';
import { colors } from 'utils/style';
import type { InscriptionSummary } from 'utils/types';

type Props = {
	item: InscriptionSummary;
	onPress: (id: string) => void;
};

export const Inscription: FC<Props> = ({ item, onPress }) => {
	const firstItem = item?.inscriptions?.[0];
	return (
		<TouchableOpacity
			style={styles.container}
			onPress={() => onPress?.(firstItem?.id)}
		>
			<View style={styles.infoContainer}>
				<Text numberOfLines={1} style={styles.idText}>
					Inscription {shortId(firstItem.id)}
				</Text>
			</View>
			<RightArrowIcon />
		</TouchableOpacity>
	);
};

export default Inscription;

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
