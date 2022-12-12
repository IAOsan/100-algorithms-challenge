const sortByHeight = require('./sortByHeight');

test('for input [-1, 150, 190, 170, -1, -1, 160, 180] should return [-1, 150, 160, 170, -1, -1, 180, 190]', () => {
	const result = sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]);
	expect(result).toEqual([-1, 150, 160, 170, -1, -1, 180, 190]);
});
