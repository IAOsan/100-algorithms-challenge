const sumOddFibonacciNums = require('./sumOddFibonacciNums');

test('for input 10 should return 10', () => {
	const result = sumOddFibonacciNums(10);
	expect(result).toBe(10);
});

test('for input 1000 should return 1785', () => {
	const result = sumOddFibonacciNums(1000);
	expect(result).toBe(1785);
});

test('for input 4000000 should return 4613732', () => {
	const result = sumOddFibonacciNums(4000000);
	expect(result).toBe(4613732);
});
