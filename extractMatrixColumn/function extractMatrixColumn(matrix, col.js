function extractMatrixColumn(matrix, column) {
	// return matrix.map((row) => row[column]);
	const colTh = [];

	for (let i = 0; i < matrix.length; i++) {
		colTh.push(matrix[i][column]);
	}

	return colTh;
}

const matrix = [
	[1, 1, 1, 2],
	[0, 5, 0, 4],
	[2, 1, 3, 6],
];

const column = 2;

console.log(extractMatrixColumn(matrix, column));
