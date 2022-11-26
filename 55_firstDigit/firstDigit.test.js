const firstDigit = require('./firstDigit');

test('for inputString = "var_1__Int" should return 1', () => {
	const result = firstDigit('var_1__Int');
	expect(result).toBe('1');
});

test('for inputString = "q2q-q" should return 2', () => {
	const result = firstDigit('q2q-q');
	expect(result).toBe('2');
});

test('for inputString = "0ss" should return 0', () => {
	const result = firstDigit('0ss');
	expect(result).toBe('0');
});
