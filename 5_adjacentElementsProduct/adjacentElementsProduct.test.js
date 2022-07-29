const adjacentElementsProduct = require('./adjacentElementsProduct');

describe('given an array of numbers return the largest product of pair adjacent elements', () => {
	it('should return 21 for [3, 6, -2, -5, 7, 3]', () => {
		const expectedResult = 7 * 3;
		const input = [3, 6, -2, -5, 7, 3];

		const result = adjacentElementsProduct(input);

		expect(result).toBe(expectedResult);
	});
	it('should return 260 for [-3, 1, 3, 4, 7, 8, 13, 20]', () => {
		const expectedResult = 13 * 20;
		const input = [-3, 1, 3, 4, 7, 8, 13, 20];

		const result = adjacentElementsProduct(input);

		expect(result).toBe(expectedResult);
	});
});
