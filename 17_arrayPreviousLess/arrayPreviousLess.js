function arrayPreviousLess(arr) {
	const newArr = [];

	for (let i = 0; i < arr.length; i++) {
		const prev = arr[i - 1],
			current = arr[i];

		newArr.push(prev < current ? prev : -1);
	}

	return newArr;
}

module.exports = arrayPreviousLess;
