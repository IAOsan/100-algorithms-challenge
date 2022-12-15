const sumAllPrimes = require('./sumAllPrimes');

test('for input 10 should return 17', () => {
	const result = sumAllPrimes(10);
	expect(result).toBe(17);
});

test('for input 977 should return 73156', () => {
	const result = sumAllPrimes(977);
	expect(result).toBe(73156);
});
