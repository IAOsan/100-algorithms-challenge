function findClosestPair(numbers, sum) {
	let closest;

	for (let i = 1; i < numbers.length; i++) {
		for (let j = 0; j < i; j++) {
			if (numbers[i] + numbers[j] === sum) {
				const absDiff = Math.abs(i - j);
				closest = !closest
					? absDiff
					: absDiff < closest
					? absDiff
					: closest;
			}
		}
	}

	return closest || -1;
}

console.log(findClosestPair([1, 0, 2, 4, 3, 0], 5));
console.log(findClosestPair([2, 3, 7], 8));
