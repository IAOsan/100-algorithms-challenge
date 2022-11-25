const fareEstimator = require('./fareEstimator');

test('for time=30, distance=7, costxminute=[0.2, 0.35, 0.4, 0.45] and costxmile=[1.1, 1.8, 2.3, 3.5] should return [13.7, 23.1, 28.1, 38]', () => {
	const result = fareEstimator(
		30,
		7,
		[0.2, 0.35, 0.4, 0.45],
		[1.1, 1.8, 2.3, 3.5]
	);

	expect(result).toEqual([13.7, 23.1, 28.1, 38]);
});
