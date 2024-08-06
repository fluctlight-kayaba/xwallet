import type { FC } from 'react';
import {
	ActivityIndicator,
	Dimensions,
	Image,
	ScrollView,
	StyleSheet,
	Text,
	useWindowDimensions,
	View,
} from 'react-native';
import type { RouteProp } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { shortId } from 'utils/helper';
import { useRemoteInscription } from 'utils/hooks/inscription';
import type { HomeParamList } from 'utils/navigation';
import { colors, commonStyle, constants } from 'utils/style';

export const HomeDetailScreen: FC = () => {
	const route = useRoute<RouteProp<HomeParamList>>();
	const { id, address } = route?.params || {};
	const { loading, data, info } = useRemoteInscription(
		id as string,
		address as string,
	);
	const deviceDimension = useWindowDimensions();
	const imageStyle = {
		width: deviceDimension.width,
		height: deviceDimension.width,
	};
	const imageSource = { uri: data };

	return (
		<ScrollView style={styles.container}>
			{loading ? (
				<View style={styles.loadingContainer}>
					<ActivityIndicator color="#ffffff" />
				</View>
			) : (
				<View style={styles.dataContainer}>
					<Image source={imageSource} style={imageStyle} />
					<View style={styles.infoContainer}>
						<Text style={styles.inscriptionId}>
							Inscription {Math.abs(info?.number || 0)}
						</Text>
						<Text style={commonStyle.fieldTitle}>Inscription ID</Text>
						<Text style={styles.pageValue}>{info?.id}</Text>
						<Text style={commonStyle.fieldTitle}>Owner Address</Text>
						<Text style={[styles.pageValue, { marginBottom: 40 }]}>
							{info?.address}
						</Text>
						<Text style={styles.pageTitle}>Attributes</Text>
						<Text style={commonStyle.fieldTitle}>Output value</Text>
						<Text style={commonStyle.fieldValue}>{info?.value}</Text>
						<Text style={commonStyle.fieldTitle}>Content Type</Text>
						<Text style={commonStyle.fieldValue}>{info?.content_type}</Text>
						<Text style={commonStyle.fieldTitle}>Content Length</Text>
						<Text style={commonStyle.fieldValue}>{info?.content_length}</Text>
						<Text style={commonStyle.fieldTitle}>Location</Text>
						<Text style={commonStyle.fieldValue}>
							{shortId(info?.location, 15, 18)}
						</Text>
						<Text style={commonStyle.fieldTitle}>Genesis Transaction</Text>
						<Text style={commonStyle.fieldValue}>
							{shortId(info?.genesis_tx_id, 15, 18)}
						</Text>
					</View>
				</View>
			)}
		</ScrollView>
	);
};

export default HomeDetailScreen;

const deviceDimension = Dimensions.get('window');
const styles = StyleSheet.create({
	container: {},
	headingImage: {
		width: deviceDimension.width,
		height: deviceDimension.width,
	},
	loadingContainer: {
		paddingTop: 120,
	},
	dataContainer: {
		flex: 1,
	},
	infoContainer: {
		flex: 1,
		paddingHorizontal: constants.pagePadding,
	},
	inscriptionId: {
		color: colors.text,
		fontSize: 16,
		borderBottomWidth: 1,
		borderColor: 'rgba(255, 255, 255, 0.05)',
		paddingVertical: 12,
		marginBottom: 18,
	},
	pageTitle: {
		color: colors.text,
		fontSize: 16,
		marginBottom: 32,
	},
	pageValue: {
		color: colors.text,
		fontWeight: '500',
		marginBottom: 18,
	},
});
