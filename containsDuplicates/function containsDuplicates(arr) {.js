function containsDuplicates(arr) {
	const sortedArr = arr.sort((a, b) => a - b);

	for (let i = 1; i < arr.length; i++) {
		if (sortedArr[i - 1] === sortedArr[i]) return true;
	}

	return false;
}

console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([3, 1]));
