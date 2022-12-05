function mineSweeper(matrix) {
	const result = [];
	function getRowSum(row, index) {
		if (!row) return 0;
		const getValue = (cell) => (cell ? 1 : 0);
		const prev = getValue(row[index - 1]);
		const next = getValue(row[index + 1]);
		const current = getValue(row[index]);
		return prev + current + next;
	}
	for (let i = 0; i < matrix.length; i++) {
		const currentRow = matrix[i];
		const temp = [];
		for (let k = 0; k < currentRow.length; k++) {
			if (currentRow[k]) {
				temp.push(1);
			} else {
				const topRow = getRowSum(matrix[i - 1], k);
				const centerRow = getRowSum(currentRow, k);
				const bottomRow = getRowSum(matrix[i + 1], k);
				temp.push(topRow + centerRow + bottomRow);
			}
		}
		result.push(temp);
	}
	return result;
}

module.exports = mineSweeper;
