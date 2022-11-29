function houseNumbersSum(arr) {
	let total = 0;

	for (let i = 0; i < arr.length; i++) {
		const numberToSum = arr[i];
		if (numberToSum === 0) return total;
		total += numberToSum;
	}

	return total;
}

module.exports = houseNumbersSum;
