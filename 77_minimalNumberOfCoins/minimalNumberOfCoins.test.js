const minimalNumberOfCoins = require('./minimalNumberOfCoins');

test('for coins=[1,2,10] and price=28 should return 6', () => {
	const result = minimalNumberOfCoins([1, 2, 10], 28);
	expect(result).toBe(6);
});
