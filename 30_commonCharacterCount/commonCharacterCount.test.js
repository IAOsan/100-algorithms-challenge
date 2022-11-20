const commonCharacterCount = require('./commonCharacterCount');

test('for input s1=aabcc and s2=adcaa should return 3', () => {
	const expectedResult = 3;

	const result = commonCharacterCount('aabcc', 'adcaa');

	expect(result).toBe(expectedResult);
});
