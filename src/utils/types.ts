export type InscriptionSummary = {
	block_height: number;
	inscriptions: Array<{
		id: string;
		offset: number;
		content_type?: string;
	}>;
	stats: [];
	txid: string;
	value: number;
	vout: number;
};

export type InscriptionDetail = {
	address: string;
	content_length: number;
	content_type: string;
	genesis_address: string;
	genesis_block_hash: string;
	genesis_block_height: number;
	genesis_fee: number;
	genesis_timestamp: number;
	genesis_tx_id: string;
	id: string;
	location: string;
	mime_type: string;
	number: number;
	offset: number;
	output: string;
	sat_coinbase_height: number;
	sat_ordinal: number;
	sat_rarity: string;
	timestamp: number;
	tx_id: string;
	value: number;
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
