const firstNotRepeatingCharacter = require('./firstNotRepeatingCharacter');

test('for s="abacabad" should return "c"', () => {
	const result = firstNotRepeatingCharacter('abacabad');
	expect(result).toBe('c');
});

test('for s="abacabaabacaba" should return "_"', () => {
	const result = firstNotRepeatingCharacter('abacabaabacaba');
	expect(result).toBe('_');
});
