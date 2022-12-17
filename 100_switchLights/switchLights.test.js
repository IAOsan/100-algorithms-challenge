const switchLights = require('./switchLights');

test('for input [1, 1, 1, 1, 1] should return [0, 1, 0, 1, 0]', () => {
	const result = switchLights([1, 1, 1, 1, 1]);
	expect(result).toEqual([0, 1, 0, 1, 0]);
});

test('for input [0, 0] should return [0, 0]', () => {
	const result = switchLights([0, 0]);
	expect(result).toEqual([0, 0]);
});
