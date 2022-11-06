const arrayReplace = require('./arrayReplace');

test('for input [1,2,1] elemenToReplace = 1 & substitutionEl = 3 should return [3,2,3]', () => {
	const expectedResult = [3, 2, 3];

	const result = arrayReplace([1, 2, 1], 1, 3);

	expect(result).toEqual(expectedResult);
});
