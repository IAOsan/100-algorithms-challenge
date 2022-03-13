function almostIncreasingSecuence(arr) {
	let count = 0;

	for (let i = 1; i < arr.length; i++) {
		// console.log(arr[i], arr[i-1])
		if (arr[i] <= arr[i - 1]) count++;
	}
	console.log(count);
	return count <= 1;
}

// console.log(almostIncreasingSecuence([1, 3, 2, 1]));
console.log(almostIncreasingSecuence([1, 3, 2]));
// console.log(almostIncreasingSecuence([1, 5, 1, 3]));
console.log('hola');
