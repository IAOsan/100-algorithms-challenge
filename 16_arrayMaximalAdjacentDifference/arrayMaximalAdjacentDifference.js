function arrayMaximalAdjacentDifference(arr) {
	let maxDiff = 0;

	for (let i = 0; i < arr.length - 1; i++) {
		const a = arr[i],
			b = arr[i + 1],
			diff = Math.abs(a - b);

		if (diff > maxDiff) maxDiff = diff;
	}

	return maxDiff;
}

module.exports = arrayMaximalAdjacentDifference;
