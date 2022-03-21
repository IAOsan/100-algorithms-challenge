function crossingSum(matrix, a, b) {
	const middle = Math.floor(matrix.length / 2);
	const middleColumnSum = matrix[middle].reduce((acc, n) => (acc += n), 0);

	return middleColumnSum + (a + b);
}

const m = [
	[1, 1, 1, 1],
	[2, 2, 2, 2],
	[3, 3, 3, 3],
];
const a = 1;
const b = 3;

console.log(crossingSum(m, a, b));
