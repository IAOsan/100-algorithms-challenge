function crossingSum(matrix, a, b) {
	const rowSum = matrix[a].reduce(
		(acc, el, idx) => (acc += idx !== b ? el : 0),
		0
	);
	const colSum = matrix.reduce((acc, el) => acc + el[b], 0);
	return rowSum + colSum;
}

module.exports = crossingSum;
