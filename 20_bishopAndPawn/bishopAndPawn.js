function bishopAndPawn(bishop, pawn) {
	const board = {
			a: 1,
			b: 2,
			c: 3,
			d: 4,
			e: 5,
			f: 6,
			g: 7,
			h: 8,
		},
		bishopX = board[bishop[0]],
		bishopY = +bishop[1],
		pawnX = board[pawn[0]],
		pawnY = +pawn[1],
		areBothCoordEquals = bishopX === bishopY && pawnX === pawnY,
		areBothCoordDiff = bishopX * bishopY === pawnX * pawnY;

	if (areBothCoordEquals || areBothCoordDiff) return true;

	return false;
}

module.exports = bishopAndPawn;
