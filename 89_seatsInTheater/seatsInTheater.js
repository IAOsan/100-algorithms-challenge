function seatsInTheater(nCols, nRows, col, row) {
	const x = nRows - row;
	const y = nCols - (col - 1);
	return x * y;
}

module.exports = seatsInTheater;
