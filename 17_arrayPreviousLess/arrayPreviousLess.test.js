const arrayPreviousLess = require('./arrayPreviousLess');

test('for input [3,5,2,4,5] should return [-1,3,-1,2,4]', () => {
	const expectedResult = [-1, 3, -1, 2, 4];

	const result = arrayPreviousLess([3, 5, 2, 4, 5]);

	expect(result).toEqual(expectedResult);
});
