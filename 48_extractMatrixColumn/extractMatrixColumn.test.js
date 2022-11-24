const extractMatrixColumn = require('./extractMatrixColumn');

test('for matrix=[ [1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]] and col=2 should return [1, 0, 3]', () => {
	const result = extractMatrixColumn(
		[
			[1, 1, 1, 2],
			[0, 5, 0, 4],
			[2, 1, 3, 6],
		],
		2
	);
	expect(result).toEqual([1, 0, 3]);
});
