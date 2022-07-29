const addTwoDigits = require('./addTwoDigits');

describe('return the sum of each digit of a two-digit number', () => {
	it('should return 11 for input 29', () => {
		const input = 29;
		const expectedResult = input
			.toString()
			.split('')
			.reduce((acc, n) => acc + Number(n), 0);

		const result = addTwoDigits(input);

		expect(result).toBe(expectedResult);
	});
	it('should return 5 for input 50', () => {
		const input = 50;
		const expectedResult = input
			.toString()
			.split('')
			.reduce((acc, n) => acc + Number(n), 0);

		const result = addTwoDigits(input);

		expect(result).toBe(expectedResult);
	});
});
