const uniqueDigitProducts = require('./uniqueDigitProducts');

test('for input [2, 8, 121, 42, 222, 23] should return 3', () => {
	const result = uniqueDigitProducts([2, 8, 121, 42, 222, 23]);
	expect(result).toBe(3);
});
