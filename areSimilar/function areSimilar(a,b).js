function areSimilar(a, b) {
	// const elementCounter = (value,arr) => {
	// 	let counter = 0

	// 	arr.forEach(element => {
	// 		if (element === value) counter++
	// 	});

	// 	return counter;
	// }

	// for (let i = 0; i < a.length; i++) {
	// 	const numberOfElements = elementCounter(a[i],b)
	// 	if (numberOfElements !== 1) return false;
	// }

	// return true
	if (a.toString() === b.toString()) return true; // best case

	const weightA = a.reduce((acc, element) => (acc += element), 0); //worst case
	const weightB = b.reduce((acc, element) => (acc += element), 0);

	return weightA === weightB;
}

console.log(areSimilar([1, 2, 2], [2, 1, 1]));
console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 8], [2, 1, 3]));
