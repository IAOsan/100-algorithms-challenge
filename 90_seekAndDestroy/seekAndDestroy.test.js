const seekAndDestroy = require('./seekAndDestroy');

test('for input initialArray=[3, 5, 1, 2, 2] and arguments=[2, 3, 5] should return [1]', () => {
	const result = seekAndDestroy([3, 5, 1, 2, 2], [2, 3, 5]);
	expect(result).toEqual([1]);
});

test('for input initialArray=[1, 2, 3, 5, 1, 2, 3] and arguments=[2, 3] should return [1, 5, 1]', () => {
	const result = seekAndDestroy([1, 2, 3, 5, 1, 2, 3], [2, 3]);
	expect(result).toEqual([1, 5, 1]);
});
