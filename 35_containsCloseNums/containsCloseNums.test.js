const containsCloseNums = require('./containsCloseNums');

test('for nums=[0, 1, 2, 3, 5, 2] and k=3 should return true', () => {
	const expectedResult = true;

	const result = containsCloseNums([0, 1, 2, 3, 5, 2], 3);

	expect(result).toBe(expectedResult);
});

test('for nums=[0, 1, 2, 3, 5, 2] and k=2 should return true', () => {
	const expectedResult = false;

	const result = containsCloseNums([0, 1, 2, 3, 5, 2], 2);

	expect(result).toBe(expectedResult);
});
