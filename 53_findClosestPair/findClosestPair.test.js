const findClosestPair = require('./findClosestPair');

test('for numbers=[1, 0, 2, 4, 3, 0] and sum=5 should return 2', () => {
	const result = findClosestPair([1, 0, 2, 4, 3, 0], 5);
	expect(result).toBe(2);
});

test('for numbers=[2, 3, 7] and sum=8 should return -1', () => {
	const result = findClosestPair([2, 3, 7], 8);
	expect(result).toBe(-1);
});
