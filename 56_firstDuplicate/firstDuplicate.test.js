const firstDuplicate = require('./firstDuplicate');

test('for a=[2, 1, 3, 5, 3, 2] the output should be 3', () => {
	const result = firstDuplicate([2, 1, 3, 5, 3, 2]);
	expect(result).toBe(3);
});

test('for a=[2, 4, 3, 5, 1] the output should be -1', () => {
	const result = firstDuplicate([2, 4, 3, 5, 1]);
	expect(result).toBe(-1);
});
