const newNumeralSystem = require('./newNumeralSystem');

test('for input "G" should return ["A + G", "B + F", "C + E", "D + D"]', () => {
	const result = newNumeralSystem('G');
	expect(result).toEqual(['A + G', 'B + F', 'C + E', 'D + D']);
});
