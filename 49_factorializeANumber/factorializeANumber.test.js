const factorializeANumber = require('./factorializeANumber');

test('for input 5 should return 120', () => {
	const result = factorializeANumber(5);
	expect(result).toBe(120);
});

test('for input 10 should return 3628800', () => {
	const result = factorializeANumber(10);
	expect(result).toBe(3628800);
});
