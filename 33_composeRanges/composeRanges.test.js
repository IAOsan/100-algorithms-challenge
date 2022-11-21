const composeRanges = require('./composeRanges');

test('for input [-1, 0, 1, 2, 6, 7, 9] should return ["-1->2", "6->7", "9"]', () => {
	const expectedResult = ['-1->2', '6->7', '9'];

	const result = composeRanges([-1, 0, 1, 2, 6, 7, 9]);

	expect(result).toEqual(expectedResult);
});
