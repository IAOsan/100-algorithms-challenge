const extractEachKth = require('./extractEachKth');

test('for input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and k=3 should return [1, 2, 4, 5, 7, 8, 10]', () => {
	const result = extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
	expect(result).toEqual([1, 2, 4, 5, 7, 8, 10]);
});
