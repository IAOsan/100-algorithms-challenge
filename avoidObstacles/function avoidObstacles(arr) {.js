function avoidObstacles(arr) {
	const sortedArr = arr.sort((a, b) => a - b);
	const lastElement = sortedArr[arr.length - 1];

	for (let i = 1; i <= lastElement + 1; i++) {
		// cuando cada elemento tenga un modulo distinto de 0 retornara 1
		if (sortedArr.every((element) => element % i !== 0)) {
			return i;
		}
	}
}

console.log(avoidObstacles([5, 3, 6, 7, 9, 12]));
