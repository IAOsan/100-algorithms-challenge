const fancyRide = require('./fancyRide');

test('for l=30 and fares=[0.3, 0.5, 0.7, 1, 1.3] should return "UberXL"', () => {
	const result = fancyRide(30, [0.3, 0.5, 0.7, 1, 1.3]);
	expect(result).toBe('UberXL');
});
