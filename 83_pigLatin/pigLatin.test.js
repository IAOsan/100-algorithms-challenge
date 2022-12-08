const pigLatin = require('./pigLatin');

test('for input "glove" should return "oveglay"', () => {
	const result = pigLatin('glove');
	expect(result).toBe('oveglay');
});

test('for input "eight" should return "eightway"', () => {
	const result = pigLatin('eight');
	expect(result).toBe('eightway');
});
