const largestOfFour = require('./largestOfFour');

test('for input [ [4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]] should return [5, 27, 39, 1001]', () => {
	const result = largestOfFour([
		[4, 5, 1, 3],
		[13, 27, 18, 26],
		[32, 35, 37, 39],
		[1000, 1001, 857, 1],
	]);
	expect(result).toEqual([5, 27, 39, 1001]);
});

test('for input [ [4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1], ] should return [9, 35, 97, 1000000]', () => {
	const result = largestOfFour([
		[4, 9, 1, 3],
		[13, 35, 18, 26],
		[32, 35, 97, 39],
		[1000000, 1001, 857, 1],
	]);
	expect(result).toEqual([9, 35, 97, 1000000]);
});
