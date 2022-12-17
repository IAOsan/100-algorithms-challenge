const sumOfTwo = require('./sumOfTwo');

test('for a=[1, 2, 3] b=[10, 20, 30, 40] and v=42 should return true', () => {
	const result = sumOfTwo([1, 2, 3], [10, 20, 30, 40], 42);
	expect(result).toBe(true);
});
