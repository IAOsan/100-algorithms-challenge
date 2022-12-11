const shapeArea = require('./shapeArea');

test('for input 2 should return 5', () => {
	const result = shapeArea(2);
	expect(result).toBe(5);
});

test('for input 3 should return 13', () => {
	const result = shapeArea(3);
	expect(result).toBe(13);
});
