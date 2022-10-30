const alphabeticShift = require('./alphabeticShift');

test('For inputString = "crazy", the output should be "dsbaz"', () => {
	const expectedResult = 'dsbaz';
	const result = alphabeticShift('crazy');

	expect(result).toBe(expectedResult);
});
