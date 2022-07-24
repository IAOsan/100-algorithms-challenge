const add = require('./add');

it('should return the sum of two nums', () => {
	const num1 = 4;
	const num2 = 4;
	const expectedResult = num1 + num2;

	const result = add(num1, num2);

	expect(result).toBe(expectedResult);
});

it('should return the sum of all numbers regardless of # of params', () => {
	const num1 = 4;
	const num2 = 4;
	const num3 = 4;
	const num4 = 4;
	const expectedResult = num1 + num2 + num3 + num4;

	const result = add(num1, num2, num3, num4);

	expect(result).toBe(expectedResult);
});
