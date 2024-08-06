import { useMemo } from 'react';
import { inscriptionState } from 'state/inscription';
import { useSnapshot } from 'valtio';

export const useInscription = (id: string) => {
	const { items } = useSnapshot(inscriptionState);
	const cachedInscription = useMemo(() => {
		return items.find((item) => item.id === id);
	}, [items.length]);

	return cachedInscription;
};
