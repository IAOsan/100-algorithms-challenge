const tasksType = require('./tasksType');

test('for deadlines=[1, 2, 3, 4, 5] and day=2 should return [2, 3, 0]', () => {
	const result = tasksType([1, 2, 3, 4, 5], 2);
	expect(result).toEqual([2, 3, 0]);
});

test('for deadlines=[1, 2, 4, 2, 10, 3, 1, 4, 5, 4, 9, 8] and day=1 should return [2, 8, 2]', () => {
	const result = tasksType([1, 2, 4, 2, 10, 3, 1, 4, 5, 4, 9, 8], 1);
	expect(result).toEqual([2, 8, 2]);
});
