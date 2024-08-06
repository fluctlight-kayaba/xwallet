export const shortId = (
	input?: string,
	startLength = 4,
	endLength = 4,
): string => {
	if (!input) return '';

	if (typeof input !== 'string' || input.length <= startLength + endLength) {
		return input;
	}

	const start = input.slice(0, startLength);
	const end = input.slice(-endLength);

	return `${start}...${end}`;
};
