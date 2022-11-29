const houseNumbersSum = require('./houseNumbersSum');

test('for input [5, 1, 2, 3, 0, 1, 5, 0, 2] should return 11', () => {
	const result = houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]);
	expect(result).toBe(11);
});
