function matrixElementsSum(matrix) {
	let count = 0;

	for (let i = 0; i < matrix.length; i++) {
		const element = matrix[i];
		const prevElement = matrix[i - 1];

		for (let k = 0; k < (element.length - 1) / 2; k++) {
			const left = 0 + k,
				right = element.length - 1 - k;

			count += !!prevElement
				? !!prevElement[left] && element[left]
				: element[left];
			count += !!prevElement
				? !!prevElement[right] && element[right]
				: element[right];
		}
	}

	return count;
}

module.exports = matrixElementsSum;
