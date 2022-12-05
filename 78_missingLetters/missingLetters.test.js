const missingLetters = require('./missingLetters');

test('for input "abce" should return "d"', () => {
	const result = missingLetters('abce');
	expect(result).toBe('d');
});

test('for input "abcdefghjklmno" should return "i"', () => {
	const result = missingLetters('abcdefghjklmno');
	expect(result).toBe('i');
});

test('for input "abcdefghijklmnopqrstuvwxyz" should return undefined', () => {
	const result = missingLetters('abcdefghijklmnopqrstuvwxyz');
	expect(result).toBe(undefined);
});
