const largestNumber = require('./largestNumber');

test('for 2 should return 99', () => {
	const result = largestNumber(2);
	expect(result).toBe(99);
});
