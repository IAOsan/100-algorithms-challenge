function firstDuplicate(numbers) {
	// let firstDuplicateIndex;

	// for (let i = 0; i < numbers.length; i++) {
	// 	const lastIndex = numbers.lastIndexOf(numbers[i]);

	// 	if (lastIndex !== i) {
	// 		firstDuplicateIndex = !firstDuplicateIndex ? lastIndex : (lastIndex < firstDuplicateIndex ? lastIndex:firstDuplicateIndex);
	// 	}
	// }

	// return numbers[firstDuplicateIndex] || -1;
	let duplicates = {};

	for (let i = 0; i < numbers.length; i++) {
		if (duplicates[numbers[i]]) {
			return numbers[i];
		}
		duplicates[numbers[i]] = i;
	}

	return -1;
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
console.log(firstDuplicate([2, 4, 3, 5, 1]));
