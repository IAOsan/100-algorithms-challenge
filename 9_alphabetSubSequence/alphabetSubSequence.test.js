const alphabetSubSequence = require('./alphabetSubSequence');

test('for input "effg" should return false', () => {
	const expectedResult = false;

	const result = alphabetSubSequence('effg');

	expect(result).toBe(expectedResult);
});

test('for input "cdce" should return false', () => {
	const expectedResult = false;

	const result = alphabetSubSequence('cdce');

	expect(result).toBe(expectedResult);
});

test('for input "ace" should return true', () => {
	const expectedResult = true;

	const result = alphabetSubSequence('ace');

	expect(result).toBe(expectedResult);
});

test('for input "bxz" should return true', () => {
	const expectedResult = true;

	const result = alphabetSubSequence('bxz');

	expect(result).toBe(expectedResult);
});
