import { useEffect, useState } from 'react';
import type { InscriptionDetail } from 'utils/types';

enum ResponseDataType {
	PNG,
	GIF,
	SVG,
	JSON,
	RAW,
}

export type FetchState = {
	loading: boolean;
	data?: string;
	dataType?: ResponseDataType;
	info?: InscriptionDetail;
	error?: Error;
};

const getResponseDataType = (response: Response): ResponseDataType => {
	const contentType = response.headers.get('Content-Type');

	if (contentType?.includes('image/png')) {
		return ResponseDataType.PNG;
	}

	if (contentType?.includes('image/gif')) {
		return ResponseDataType.GIF;
	}

	if (contentType?.includes('image/svg+xml')) {
		return ResponseDataType.SVG;
	}

	if (contentType?.includes('application/json')) {
		return ResponseDataType.JSON;
	}

	return ResponseDataType.RAW;
};

export const useRemoteInscription = (
	id: string,
	address: string,
): FetchState => {
	const [data, setData] = useState<FetchState>({ loading: true });

	useEffect(() => {
		const fetchData = async () => {
			try {
				const infoResponse = await fetch(
					`https://api-3.xverse.app/v1/address/${address}/ordinals/inscriptions/${id}`,
					{
						headers: {
							'Content-Type': 'application/json',
							Accept: 'application/json',
						},
					},
				);
				const info = await infoResponse.json();
				const contentResponse = await fetch(
					`https://ord.xverse.app/content/${id}`,
				);
				const dataType = getResponseDataType(contentResponse);

				if (dataType === ResponseDataType.JSON) {
					setData({
						loading: false,
						data: await contentResponse.json(),
						info,
						dataType,
					});
				} else if (
					[
						ResponseDataType.PNG,
						ResponseDataType.GIF,
						ResponseDataType.SVG,
					].indexOf(dataType) >= 0
				) {
					const blob = await contentResponse.blob();
					const reader = new FileReader();
					reader.onloadend = () => {
						setData({
							loading: false,
							data: reader.result as string,
							info,
							dataType,
						});
					};
					reader.readAsDataURL(blob);
				} else {
					setData({
						loading: false,
						data: await contentResponse.text(),
						info,
						dataType,
					});
				}
			} catch (error) {
				setData({ loading: false, error: error as Error });
			}
		};

		fetchData();
	}, []);

	return data;
};
