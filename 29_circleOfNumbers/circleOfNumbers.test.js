const circleOfNumbers = require('./circleOfNumbers');

test('for n=10 and firstNumber=2 should return 7', () => {
	const expectedResult = 7;

	const result = circleOfNumbers(10, 2);

	expect(result).toBe(expectedResult);
});

test('for n=10 and firstNumber=0 should return 9', () => {
	const expectedResult = 9;

	const result = circleOfNumbers(10, 0);

	expect(result).toBe(expectedResult);
});

test('for n=10 and firstNumber=4 should return 5', () => {
	const expectedResult = 5;

	const result = circleOfNumbers(10, 4);

	expect(result).toBe(expectedResult);
});
