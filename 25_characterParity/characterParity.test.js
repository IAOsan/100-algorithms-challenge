const characterParity = require('./characterParity');

test('for input 5 should return "odd"', () => {
	const expectedResult = 'odd';

	const result = characterParity('5');

	expect(result).toBe(expectedResult);
});

test('for input 8 should return "even"', () => {
	const expectedResult = 'even';

	const result = characterParity('8');

	expect(result).toBe(expectedResult);
});

test('for input q should return "not a digit"', () => {
	const expectedResult = 'not a digit';

	const result = characterParity({});

	expect(result).toBe(expectedResult);
});
