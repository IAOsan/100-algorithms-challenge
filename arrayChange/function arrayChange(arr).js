function arrayChange(arr) {
	const lastElement = arr.length - 1;
	let isIncremental = false;
	let counter = 1;

	while (!isIncremental) {
		for (let j = 1; j < arr.length; j++) {
			// while before element minor or equal than current element
			if (arr[j] <= arr[j - 1]) {
				arr[j] += 1;
			}
		}
		isIncremental = arr[lastElement] > arr[lastElement - 1];
		counter++;
	}

	// best performance
	// for (let i = 1; i < arr.length; i++) {
	// 	// difference between elements
	// 	let diff = arr[i] > arr[i-1] ? arr[i] - arr[i-1]:arr[i-1] - arr[i];
	// 	if (arr[i] <= arr[i-1]) {
	// 		arr[i] += diff + 1;
	// 		counter += diff + 1;
	// 	}
	// }
	console.log(arr);
	return counter;
}

console.log(arrayChange([1, 1, 1])); //3
console.log(arrayChange([1, 3, 1]));
console.log(arrayChange([3, 2, 1]));

// 3 2 1
// 3 3 2
// 3 4 3
// 3 4 4
// 3 4 5

// 3 4 1

// 1 3 1
// 1 3 2
// 1 3 3
// 1 3 4

// 1 1 1 => 1
// 1 2 1 => 2
// 1 2 3

// 1 3 1
// 1 3 2
// 1 3 3
// 1 3 4
