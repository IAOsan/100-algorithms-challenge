const almostIncreasingSecuence = require('./almostIncreasingSecuence');

test('for secuence [1, 3, 2, 1] shoud return false', () => {
	const result = almostIncreasingSecuence([1, 3, 2, 1]);
	expect(result).toBe(false);
});

test('for secuence [1, 3, 2] shoud return true', () => {
	const result = almostIncreasingSecuence([1, 3, 2]);
	expect(result).toBe(false);
});

test('for secuence of 50 integers should return true', () => {
	const arr = [
		3, 6, 8, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 21, 25, 27, 28, 29, 30,
		31, 32, 33, 35, 36, 37, 38, 40, 41, 45, 47, 48, 49, 50, 52, 53, 54, 58,
		59, 61, 62, 64, 66, 67, 69, 71, 73, 75, 76, 77, 79,
	];
	const result = almostIncreasingSecuence(arr);
	expect(result).toBe(true);
});
