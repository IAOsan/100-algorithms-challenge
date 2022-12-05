const mineSweeper = require('./mineSweeper');

test('for input [[true, false, false], [false, true, false], [false, false, false]] should return [[1, 2, 1], [2, 1, 1], [1, 1, 1]]', () => {
	const result = mineSweeper([
		[true, false, false],
		[false, true, false],
		[false, false, false],
	]);
	expect(result).toEqual([
		[1, 2, 1],
		[2, 1, 1],
		[1, 1, 1],
	]);
});
