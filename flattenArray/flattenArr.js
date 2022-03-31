function unRollArr(value) {
	if (!Array.isArray(value)) return value;

	while (Array.isArray(value)) {
		value = value[0];
	}

	return value;
}

function steamrollArray(arr) {
	let unRolledArr = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i].length > 1) {
			for (let k = 0; k < arr[i].length; k++) {
				unRolledArr.push(unRollArr(arr[i][k]));
			}
		} else {
			unRolledArr.push(unRollArr(arr[i]));
		}
	}
	return unRolledArr;
}

console.log(steamrollArray([[['a']], [['b']]]));
console.log(steamrollArray([1, [2], [3, [[4]]]]));
