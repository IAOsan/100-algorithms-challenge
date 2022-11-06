const arrayMaximalAdjacentDifference = require('./arrayMaximalAdjacentDifference');

test('for input [2,4,1,0] should return 3', () => {
	const expectedResult = 3;

	const result = arrayMaximalAdjacentDifference([2, 4, 1, 0]);

	expect(result).toBe(expectedResult);
});

test('for input [2,9,1,0] should return 3', () => {
	const expectedResult = 8;

	const result = arrayMaximalAdjacentDifference([2, 9, 1, 0]);

	expect(result).toBe(expectedResult);
});
