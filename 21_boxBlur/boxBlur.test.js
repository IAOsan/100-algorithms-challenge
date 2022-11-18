const boxBlur = require('./boxBlur');

test('for input [[1, 1, 1], [1, 7, 1], [1, 1, 1]] should return [[1]]', () => {
	const expectedResult = [[1]];

	const result = boxBlur([
		[1, 1, 1],
		[1, 7, 1],
		[1, 1, 1],
	]);

	expect(result).toEqual(expectedResult);
});
