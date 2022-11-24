const evenDigitsOnly = require('./evenDigitsOnly');

test('for input 248622 should return true', () => {
	const result = evenDigitsOnly(248622);
	expect(result).toBe(true);
});

test('for input 642386 should return false', () => {
	const result = evenDigitsOnly(642386);
	expect(result).toBe(false);
});
