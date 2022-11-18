const bishopAndPawn = require('./bishopAndPawn');

test('for bishop=a1 and pawn=c3 should return true', () => {
	const expectedResult = true;

	const result = bishopAndPawn('a1', 'c3');

	expect(result).toBe(expectedResult);
});

test('for bishop=d2 and pawn=b4 should return true', () => {
	const expectedResult = true;

	const result = bishopAndPawn('d2', 'b4');

	expect(result).toBe(expectedResult);
});

test('for bishop=h8 and pawn=h6 should return false', () => {
	const expectedResult = false;

	const result = bishopAndPawn('h8', 'h6');

	expect(result).toBe(expectedResult);
});
