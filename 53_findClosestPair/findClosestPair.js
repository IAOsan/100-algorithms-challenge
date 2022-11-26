function findClosestPair(numbers, sum) {
	let diff;
	for (let i = 0; i < numbers.length; i++) {
		for (let k = i + 1; k < numbers.length; k++) {
			const currentSum = numbers[i] + numbers[k];
			const currentDiff = Math.abs(i - k);
			if (currentSum === sum) {
				diff = !diff
					? currentDiff
					: currentDiff < diff
					? currentDiff
					: diff;
			}
		}
	}
	return diff || -1;
}

module.exports = findClosestPair;
