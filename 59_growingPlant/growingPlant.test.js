const growingPlant = require('./growingPlant');

test('for upSpeed=100, downSpeed=10 and desiredHeight=910 should return', () => {
	const result = growingPlant(100, 10, 910);
	expect(result).toBe(10);
});
