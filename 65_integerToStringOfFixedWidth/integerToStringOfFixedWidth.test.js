const integerToStringOfFixedWidth = require('./integerToStringOfFixedWidth');

test('for number=1234 and width=2 should return "34"', () => {
	const result = integerToStringOfFixedWidth(1234, 2);
	expect(result).toBe('34');
});

test('for number=1234 and width=4 should return "1234"', () => {
	const result = integerToStringOfFixedWidth(1234, 4);
	expect(result).toBe('1234');
});

test('for number=1234 and width=5 should return "01234"', () => {
	const result = integerToStringOfFixedWidth(1234, 5);
	expect(result).toBe('01234');
});
