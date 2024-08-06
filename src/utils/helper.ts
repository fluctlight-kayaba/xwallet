export const shortId = (
	input?: string,
	startLength = 6,
	endLength = 6,
): string => {
	if (!input) return '';

	if (typeof input !== 'string' || input.length <= startLength + endLength) {
		return input;
	}

	const start = input.slice(0, startLength);
	const end = input.slice(-endLength);

	return `${start}...${end}`;
};
