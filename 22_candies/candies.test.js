const candies = require('./candies');

test('for n=3 m=10 should return 9', () => {
	const expectedResult = 9;

	const result = candies(3, 10);

	expect(result).toBe(expectedResult);
});
