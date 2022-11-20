function chessBoardCellColor(cell1, cell2) {
	const board = {
		a: 1,
		b: 2,
		c: 3,
		d: 4,
		e: 5,
		f: 6,
		g: 7,
		h: 8,
	};

	const cell1X = board[cell1[0].toLowerCase()];
	const cell1Y = +cell1[1];
	const cell2X = board[cell2[0].toLowerCase()];
	const cell2Y = +cell2[1];
	const isEven = (n) => n % 2 === 0;

	const cell1Color =
		(isEven(cell1X) && isEven(cell1Y)) ||
		(!isEven(cell1X) && !isEven(cell1Y))
			? 1
			: 0;
	const cell2Color =
		(isEven(cell2X) && isEven(cell2Y)) ||
		(!isEven(cell2X) && !isEven(cell2Y))
			? 1
			: 0;

	return cell1Color == cell2Color;
}

module.exports = chessBoardCellColor;
