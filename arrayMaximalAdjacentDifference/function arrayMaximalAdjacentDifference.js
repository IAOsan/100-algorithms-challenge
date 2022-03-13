function arrayMaximalAdjacentDifference(arr) {
	let maxDifference = 0;

	for (let i = 0; i < arr.length - 1; i++) {
		let difference = Math.abs(arr[i] - arr[i + 1]);
		if (difference > maxDifference) maxDifference = difference;
	}
	return maxDifference;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
console.log(arrayMaximalAdjacentDifference([2, 9, 1, 0]));
