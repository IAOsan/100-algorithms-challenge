const digitDegree = require('./digitDegree');

test('for input 5 should return 0', () => {
	const expectedResult = 0;

	const result = digitDegree(5);

	expect(result).toBe(expectedResult);
});

test('for input 100 should return 1', () => {
	const expectedResult = 1;

	const result = digitDegree(100);

	expect(result).toBe(expectedResult);
});

test('for input 91 should return 2', () => {
	const expectedResult = 2;

	const result = digitDegree(91);

	expect(result).toBe(expectedResult);
});
