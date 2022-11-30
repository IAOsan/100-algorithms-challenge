const isLucky = require('./isLucky');

test('for 1230 should return true', () => {
	const result = isLucky(1230);
	expect(result).toBe(true);
});

test('for 239017 should return false', () => {
	const result = isLucky(239017);
	expect(result).toBe(false);
});
