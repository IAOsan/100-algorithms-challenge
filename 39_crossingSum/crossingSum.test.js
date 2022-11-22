const crossingSum = require('./crossingSum');

test('for input [[1,1,1,1],[2,2,2,2],[3,3,3,3]], a=1 and b=3 should return 12', () => {
	const expectedResult = 12;

	const result = crossingSum(
		[
			[1, 1, 1, 1],
			[2, 2, 2, 2],
			[3, 3, 3, 3],
		],
		1,
		3
	);

	expect(result).toBe(expectedResult);
});
