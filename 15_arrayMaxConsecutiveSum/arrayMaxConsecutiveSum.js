function arrayMaxConsecutiveSum(arr, k) {
	let maxSum = 0,
		sum = arr[0],
		elementsCount = 1;

	for (let i = 1; i < arr.length; i++) {
		sum += arr[i];
		elementsCount++;

		if (elementsCount === k) {
			maxSum = sum > maxSum ? sum : maxSum;
			sum = arr[i];
			elementsCount = 1;
		}
	}

	return maxSum;
}

module.exports = arrayMaxConsecutiveSum;
