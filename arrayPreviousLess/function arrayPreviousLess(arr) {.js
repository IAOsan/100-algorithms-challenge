function arrayPreviousLess(arr) {
	let temp = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i - 1] < arr[i]) {
			temp.push(arr[i - 1]);
		} else {
			temp.push(-1);
		}
	}

	// for (let j = 0; j < arr.length; j++) {
	// 	let minor = arr[0];

	// 	for(let k = 0; k <= j; k++) {
	// 		if (arr[k] < minor) minor = arr[k];
	// 	}

	// 	temp.push(minor === arr[j] ? -1:minor)
	// }

	return temp;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
