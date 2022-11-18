const avoidObstacles = require('./avoidObstacles');

test('for input [5,3,6,7,9] should return 4', () => {
	const expectedResult = 4;

	const result = avoidObstacles([5, 3, 6, 7, 9]);

	expect(result).toEqual(expectedResult);
});
