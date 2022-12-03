const maxMultiple = require('./maxMultiple');

test('for divisor=3 and bound=10 should return 9', () => {
	const result = maxMultiple(3, 10);
	expect(result).toBe(9);
});
