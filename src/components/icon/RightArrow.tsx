import type { FC } from 'react';
import { Path, Svg } from 'react-native-svg';

type Props = {
	size?: number;
	color?: string;
};

export const RightArrowIcon: FC<Props> = ({ size = 7, color = '#ffffff' }) => {
	return (
		<Svg
			width={size}
			height={size * 1.77777778}
			viewBox="0 0 9 16"
			fill="none"
			stroke={color}
			strokeWidth={1.75}
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<Path
				d="M1 1L8 8L1 15"
				stroke={color}
				strokeWidth="1.75"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg>
	);
};

export default RightArrowIcon;
