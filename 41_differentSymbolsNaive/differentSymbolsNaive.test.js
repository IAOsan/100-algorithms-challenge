const differentSymbolsNaive = require('./differentSymbolsNaive');

test('for s=cabca should return 3', () => {
	const expectedResult = 3;

	const result = differentSymbolsNaive('cabca');

	expect(result).toBe(expectedResult);
});
