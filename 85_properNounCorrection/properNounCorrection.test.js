const properNounCorrection = require('./properNounCorrection');

test('for input "pARiS" should return "Paris"', () => {
	const result = properNounCorrection('pARiS');
	expect(result).toBe('Paris');
});

test('for input "John" should return "John"', () => {
	const result = properNounCorrection('John');
	expect(result).toBe('John');
});
