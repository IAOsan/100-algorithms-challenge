const containsDuplicates = require('./containsDuplicates');

test('for input [1,2,3,1] should return true', () => {
	const expectedResult = true;

	const result = containsDuplicates([1, 2, 3, 1]);

	expect(result).toBe(expectedResult);
});

test('for input [3,1] should return false', () => {
	const expectedResult = false;

	const result = containsDuplicates([3, 1]);

	expect(result).toBe(expectedResult);
});
