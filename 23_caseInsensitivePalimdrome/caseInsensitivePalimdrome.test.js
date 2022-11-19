const caseInsensitivePalimdrome = require('./caseInsensitivePalimdrome');

test('for input AaBaa should return true', () => {
	const expectedResult = true;

	const result = caseInsensitivePalimdrome('AaBaa');

	expect(result).toBe(expectedResult);
});

test('for input abac should return false', () => {
	const expectedResult = false;

	const result = caseInsensitivePalimdrome('abac');

	expect(result).toBe(expectedResult);
});
