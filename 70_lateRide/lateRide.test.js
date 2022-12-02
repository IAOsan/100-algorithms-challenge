const lateRide = require('./lateRide');

test('for input 240 should return 4', () => {
	const result = lateRide(240);
	expect(result).toBe(4);
});

test('for input 808 should return 14', () => {
	const result = lateRide(808);
	expect(result).toBe(14);
});
