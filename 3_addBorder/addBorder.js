function addBorder(matrix, width = 1) {
	const borderChar = '*';
	const borderLength = matrix[0].length + width * 2;
	const topBottomBorder = borderChar.repeat(borderLength);
	const matrixBordered = [topBottomBorder];

	for (const e of matrix) {
		const lateralBorder = borderChar.repeat(width);
		matrixBordered.push(''.concat(lateralBorder, e, lateralBorder));
	}

	return matrixBordered.concat(topBottomBorder);
}

module.exports = addBorder;
