const convertString = require('./convertString');

test('for input s=ceoydefthf5iyg5h5yts and t=codefights should return true', () => {
	const expectedResult = true;

	const result = convertString('ceoydefthf5iyg5h5yts', 'codefights');

	expect(result).toBe(expectedResult);
});

test('for input s=addbyca and t=abcd should return false', () => {
	const expectedResult = false;

	const result = convertString('addbyca', 'abcd');

	expect(result).toBe(expectedResult);
});
