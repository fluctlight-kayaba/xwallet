export type Inscription = {
	id: string;
	offset: number;
	content_type?: string;
};

export type TransactionStats = {
	number: string;
	rarity_ranking: string;
	offset: number;
};

export type Transaction = {
	txid: string;
	vout: number;
	block_height: number;
	value: number;
	stats: Array<TransactionStats>;
};
