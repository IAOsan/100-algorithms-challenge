function sumOfTwo(a, b, v) {
	for (let i = 0; i < a.length; i++) {
		const aElement = a[i];

		for (let k = 0; k < (b.length - 1) / 2; k++) {
			const bLeft = 0 + i;
			const bRight = b.length - 1 - i;

			if (aElement + bLeft === v || aElement + bRight) return true;
		}
	}

	return false;
}

module.exports = sumOfTwo;
