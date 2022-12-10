const reflectString = require('./reflectString');

test('for input "name" should return "mznv"', () => {
	const result = reflectString('name');
	expect(result).toBe('mznv');
});
