const ratingThreshold = require('./ratingThreshold');

test('for threshold=3.5 and ratings=[[3,4],[3,3,4],[4]] should return [1]', () => {
	const result = ratingThreshold(3.5, [[3, 4], [3, 3, 4], [4]]);
	expect(result).toEqual([1]);
});
