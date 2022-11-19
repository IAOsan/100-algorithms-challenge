const checkPalindrome = require('./checkPalindrome');

test('for input aabaa should return true', () => {
	const expectedResult = true;

	const result = checkPalindrome('aabaa');

	expect(result).toBe(expectedResult);
});

test('for input abac should return false', () => {
	const expectedResult = false;

	const result = checkPalindrome('abac');

	expect(result).toBe(expectedResult);
});

test('for input a should return true', () => {
	const expectedResult = true;

	const result = checkPalindrome('a');

	expect(result).toBe(expectedResult);
});
