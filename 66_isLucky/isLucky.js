function isLucky(n) {
	const nStr = n.toString();
	let firstHalfSum = 0,
		secondHalfSum = 0;

	for (let i = 0; i < nStr.length; i++) {
		if (i + i <= nStr.length / 2) {
			firstHalfSum += +nStr[i];
		} else {
			secondHalfSum += +nStr[i];
		}
	}

	return firstHalfSum === secondHalfSum;
}

module.exports = isLucky;
