const alternatingSums = require('./alternatingSums');

test('for input [50, 60, 60, 45, 70] the result should be [180,105]', () => {
	const expectedResult = [180, 105];

	const result = alternatingSums([50, 60, 60, 45, 70]);

	expect(result).toEqual(expectedResult);
});
