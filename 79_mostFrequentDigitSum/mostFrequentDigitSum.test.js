const mostFrequentDigitSum = require('./mostFrequentDigitSum');

test('for input 88 should return 9', () => {
	const result = mostFrequentDigitSum(88);
	expect(result).toBe(9);
});

// test('for input 8 should return 8', () => {
// 	const result = mostFrequentDigitSum(8);
// 	expect(result).toBe(8);
// });
