const squareDigitsSequence = require('./squareDigitsSequence');

test('for input 16 should return 9', () => {
	const result = squareDigitsSequence(16);
	expect(result).toBe(9);
});

test('for input 103 should return 4', () => {
	const result = squareDigitsSequence(103);
	expect(result).toBe(4);
});
