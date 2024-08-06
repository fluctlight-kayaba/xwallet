import type { InscriptionSummary } from 'utils/types';
import { proxy } from 'valtio';

export type InscriptionState = {
	items: Array<InscriptionSummary>;
};

export const inscriptionState = proxy<InscriptionState>({
	items: [
		{
			id: 'e09c71fb45b4afffddd6fbe1ac650817e31db2a4d9cfb46b333b122db71b0d5ei0',
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
