const centuryFromYear = require('./centuryFromYear');

test('for input 1905 should return 20', () => {
	const expectedResult = 20;

	const result = centuryFromYear(1905);

	expect(result).toBe(expectedResult);
});

test('for input 1700 should return 17', () => {
	const expectedResult = 17;

	const result = centuryFromYear(1700);

	expect(result).toBe(expectedResult);
});
