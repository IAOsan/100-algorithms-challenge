const arrayChange = require('./arrayChange');

test('for input [1,1,1] should return 3', () => {
	const expectedResult = 3;

	const result = arrayChange([1, 1, 1]);

	expect(result).toBe(expectedResult);
});
