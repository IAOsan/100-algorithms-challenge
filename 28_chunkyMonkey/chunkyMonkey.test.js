const chunkyMonkey = require('./chunkyMonkey');

test('for input ["a", "b", "c", "d"] and 2 should return [ ["a", "b"], ["c", "d"] ]', () => {
	const expectedResult = [
		['a', 'b'],
		['c', 'd'],
	];

	const result = chunkyMonkey(['a', 'b', 'c', 'd'], 2);

	expect(result).toEqual(expectedResult);
});

test('for input ["a", "b", "c", "d"] and 1 should return [["a"], ["b"], ["c"], ["d"]]', () => {
	const expectedResult = [['a'], ['b'], ['c'], ['d']];

	const result = chunkyMonkey(['a', 'b', 'c', 'd'], 1);

	expect(result).toEqual(expectedResult);
});

test('for input [0, 1, 2, 3, 4, 5] and 4 should return [ ["a", "b"], ["c", "d"] ]', () => {
	const expectedResult = [
		[0, 1, 2, 3],
		[4, 5],
	];

	const result = chunkyMonkey([0, 1, 2, 3, 4, 5], 4);

	expect(result).toEqual(expectedResult);
});
