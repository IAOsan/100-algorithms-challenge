const encloseInBrackets = require('./encloseInBrackets');

test('for input abacaba should return (abacaba)', () => {
	const result = encloseInBrackets('abacaba');
	expect(result).toBe('(abacaba)');
});
