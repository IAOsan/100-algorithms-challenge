const depositProfit = require('./depositProfit');

test('for deposit=100, rate=20 threshold=170 should return 3', () => {
	const expectedResult = 3;

	const result = depositProfit(100, 20, 170);

	expect(result).toBe(expectedResult);
});
