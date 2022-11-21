const compareIntegers = require('./compareIntegers');

test('for input a=12 b=13 should return "less"', () => {
	const expectedResult = 'less';

	const result = compareIntegers(12, 13);

	expect(result).toBe(expectedResult);
});

test('for input a=875 b=799 should return "greater"', () => {
	const expectedResult = 'greater';

	const result = compareIntegers(875, 799);

	expect(result).toBe(expectedResult);
});

test('for input a=1000 b=1000 should return "equal"', () => {
	const expectedResult = 'equal';

	const result = compareIntegers(1000, 1000);

	expect(result).toBe(expectedResult);
});
