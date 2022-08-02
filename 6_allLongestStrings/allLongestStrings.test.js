const allLongestStrings = require('./allLongestStrings');

it('should return ["aba", "vcd", "aba"] for input ["aba", "aa", "ad", "vcd", "aba"] ', () => {
	const input = ['aba', 'aa', 'ad', 'vcd', 'aba'];
	const expectedResult = ['aba', 'vcd', 'aba'];

	const result = allLongestStrings(input);

	expect(result).toEqual(expectedResult);
});
