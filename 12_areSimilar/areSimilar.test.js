const areSimilar = require('./areSimilar');

test('for input a = [1, 2, 3] and b = [1, 2, 3] shoud return true', () => {
	const expectedResult = true;

	const result = areSimilar([1, 2, 3], [1, 2, 3]);

	expect(result).toBe(expectedResult);
});

test('for input a = [1, 2, 3] and b = [2, 1, 3] shoud return true', () => {
	const expectedResult = true;

	const result = areSimilar([1, 2, 3], [2, 1, 3]);

	expect(result).toBe(expectedResult);
});

test('for input a = [1, 2, 2] and b = [2, 1, 1] shoud return false', () => {
	const expectedResult = false;

	const result = areSimilar([1, 2, 2], [2, 1, 1]);

	expect(result).toBe(expectedResult);
});
