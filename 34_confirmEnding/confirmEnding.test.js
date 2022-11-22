const confirmEnding = require('./confirmEnding');

test('for input "Abstraction" and "action" should return true', () => {
	const expectedResult = true;

	const result = confirmEnding('Abstraction', 'action');

	expect(result).toBe(expectedResult);
});

test('for input "Open sesame" and "pen" should return false', () => {
	const expectedResult = false;

	const result = confirmEnding('Open sesame', 'pen');

	expect(result).toBe(expectedResult);
});
