const longestDigitsPrefix = require('./longestDigitsPrefix');

test('for "123aa1" should return "123"', () => {
	const result = longestDigitsPrefix('123aa1');
	expect(result).toBe('123');
});
