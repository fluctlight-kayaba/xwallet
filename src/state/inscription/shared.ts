import type { Inscription } from 'utils/types';
import { proxy } from 'valtio';

export type InscriptionState = {
	items: Array<Inscription>;
};

export const inscriptionState = proxy<InscriptionState>({
	items: [
		{
			id: '2f83b9b0',
			offset: 0,
		},
		{
			id: 'fe7cff70',
			offset: 0,
		},
		{
			id: 'b81979b1',
			offset: 0,
		},
	],
});
