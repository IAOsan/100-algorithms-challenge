const flattenArray = require('./flattenArray');

test('for input [[["a"]], [["b"]]] should return ["a", "b"]', () => {
	const result = flattenArray([[['a']], [['b']]]);
	expect(result).toEqual(['a', 'b']);
});

test('for input [1,[2],[3,[[4]]]] should return [1, 2, 3, 4]', () => {
	const result = flattenArray([1, [2], [3, [[4]]]]);
	expect(result).toEqual([1, 2, 3, 4]);
});
