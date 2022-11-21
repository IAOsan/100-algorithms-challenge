const companyBotStrategy = require('./companyBotStrategy');

test('for input [[3,1],[6,1],[4,1],[5,1]] should return 4.5', () => {
	const expectedResult = 4.5;

	const result = companyBotStrategy([
		[3, 1],
		[6, 1],
		[4, 1],
		[5, 1],
	]);

	expect(result).toBe(expectedResult);
});

test('for input [[4,1],[4,-1],[0,0],[6,1]] should return 5', () => {
	const expectedResult = 5;

	const result = companyBotStrategy([
		[4, 1],
		[4, -1],
		[0, 0],
		[6, 1],
	]);

	expect(result).toBe(expectedResult);
});

test('for input [[4,-1],[0,0],[5,-1]] should return 0', () => {
	const expectedResult = 0;

	const result = companyBotStrategy([
		[4, -1],
		[0, 0],
		[5, -1],
	]);

	expect(result).toBe(expectedResult);
});
