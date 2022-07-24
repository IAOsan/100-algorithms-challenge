const absoluteValuesSumMinimization = require('./abs');

it('should return 4 for input [2, 4, 7]', () => {
	const input = [2, 4, 7];
	const expectedResult = 4;

	const result = absoluteValuesSumMinimization(input);

	expect(result).toBe(expectedResult);
});

it('should return 4 for input [2, 4, 7, 6]', () => {
	const input = [2, 4, 7, 6];
	const expectedResult = 4;

	const result = absoluteValuesSumMinimization(input);

	expect(result).toBe(expectedResult);
});

it('should return 7 for input [2, 4, 7, 6, 6]', () => {
	const input = [2, 4, 7, 6, 6];
	const expectedResult = 7;

	const result = absoluteValuesSumMinimization(input);

	expect(result).toBe(expectedResult);
});

it('should return 7 for input [2, 4, 7, 6, 6, 8]', () => {
	const input = [2, 4, 7, 6, 6, 8];
	const expectedResult = 7;

	const result = absoluteValuesSumMinimization(input);

	expect(result).toBe(expectedResult);
});
