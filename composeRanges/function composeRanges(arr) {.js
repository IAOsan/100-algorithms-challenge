function composeRanges(arr) {
	const n = arr.length;
	let result = [];
	let count = 0;

	while (count < n) {
		const currentNumber = arr[count];
		const indexNextNumber = arr.indexOf(Math.abs(currentNumber) + 1);
		const nextNumber = arr[indexNextNumber];

		if (indexNextNumber > 0) {
			result.push(`${currentNumber}->${nextNumber}`);
			count = indexNextNumber + 1;
		} else {
			result.push(`${currentNumber}`);
			count += 1;
		}
	}

	return result;
}
// function composeRanges(arr) {
// 	const n = arr.length;
// 	let start = 0,
// 		end = Math.floor(n / 2);
// 	let result = [];

// 	while (start < n || end < n) {
// 		if (arr[start] && arr[end]) {
// 			result.push(`${arr[start]}->${arr[end]}`);
// 		} else{
// 			result.push(`${arr[start]}`);
// 		}

// 		start = end + 1;
// 		end = start + 1;
// 	}

// 	return result;
// }

console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]));
