function alternatingSums(weights) {
	let row1 = 0,
		row2 = 0;

	for (let i = 0; i < weights.length; i++) {
		if (i % 2 === 0) {
			row1 += weights[i];
		} else {
			row2 += weights[i];
		}
	}

	return [row1, row2];
}

module.exports = alternatingSums;
