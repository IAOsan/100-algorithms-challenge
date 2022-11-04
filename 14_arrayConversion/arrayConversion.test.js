const arrayConversion = require('./arrayConversion');

test('for input [1, 2, 3, 4, 5, 6, 7, 8] should return 186', () => {
	const expectedResult = [186];

	const result = arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]);

	expect(result).toEqual(expectedResult);
});
