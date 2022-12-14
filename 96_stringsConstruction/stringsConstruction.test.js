const stringsConstruction = require('./stringsConstruction');

test('for a="abc" & b="abccba" should return 2', () => {
	const result = stringsConstruction('abc', 'abccba');
	expect(result).toBe(2);
});
