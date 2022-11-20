const chessBoardCellColor = require('./chessBoardCellColor');

test('for input cell1=A1 and cell2=C3 should return true', () => {
	const expectedResult = true;

	const result = chessBoardCellColor('A1', 'C3');

	expect(result).toBe(expectedResult);
});

test('for input cell1=A1 and cell2=H3 should return false', () => {
	const expectedResult = false;

	const result = chessBoardCellColor('A1', 'H3');

	expect(result).toBe(expectedResult);
});

test('for input cell1=A1 and cell2=h3 should return false', () => {
	const expectedResult = false;

	const result = chessBoardCellColor('A1', 'h3');

	expect(result).toBe(expectedResult);
});
