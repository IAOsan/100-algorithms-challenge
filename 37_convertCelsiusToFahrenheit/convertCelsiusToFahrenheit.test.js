const convertCelsiusToFahrenheit = require('./convertCelsiusToFahrenheit');

test('for input -30 should return -22', () => {
	const expectedResult = -22;

	const result = convertCelsiusToFahrenheit(-30);

	expect(result).toBe(expectedResult);
});

test('for input -10 should return 14', () => {
	const expectedResult = 14;

	const result = convertCelsiusToFahrenheit(-10);

	expect(result).toBe(expectedResult);
});

test('for input 0 should return 32', () => {
	const expectedResult = 32;

	const result = convertCelsiusToFahrenheit(0);

	expect(result).toBe(expectedResult);
});
