const arrayMaxConsecutiveSum = require('./arrayMaxConsecutiveSum');

test('for input [2, 3, 5, 1, 6] and k = 2 should return 8', () => {
	const expectedResult = 8;

	const result = arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2);

	expect(result).toBe(expectedResult);
});
