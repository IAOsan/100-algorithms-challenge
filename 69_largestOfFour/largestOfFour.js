function largestOfFour(arr) {
	const result = [];
	let largestNumber = 0;

	for (let i = 0; i < arr.length; i++) {
		const element = arr[i];

		for (let k = 0; k < element.length / 2; k++) {
			const value_a = element[0 + k];
			const value_b = element[element.length - 1 - k];

			if (value_a === value_b) largestNumber = value_a;
			if (value_a > largestNumber) largestNumber = value_a;
			if (value_b > largestNumber) largestNumber = value_b;
		}
		result.push(largestNumber);
	}
	return result;
}

module.exports = largestOfFour;
