function extractMatrixColumn(matrix, col) {
	return matrix.reduce((acc, el) => {
		acc.push(el[col]);
		return acc;
	}, []);
}

module.exports = extractMatrixColumn;
