const matrixElementsSum = require('./matrixElementsSum');

test('for input [[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]] should return 9', () => {
	const result = matrixElementsSum([
		[0, 1, 1, 2],
		[0, 5, 0, 0],
		[2, 0, 3, 3],
	]);
	expect(result).toBe(9);
});
