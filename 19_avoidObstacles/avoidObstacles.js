function avoidObstacles(arr) {
	const obstacles = arr.reduce((acc, el) => {
		acc[el] = el;
		return acc;
	}, {});
	const largestArrVal = Object.keys(obstacles).pop();
	let jumpLength = 2;
	let hasAvoidedAllObstacles = false;

	while (!hasAvoidedAllObstacles) {
		let ocurrences = 0;
		for (let i = jumpLength; i <= largestArrVal; i += jumpLength) {
			if (obstacles[i]) {
				ocurrences++;
				break;
			}
		}

		const condition = ocurrences < 1;
		hasAvoidedAllObstacles = condition;
		jumpLength += condition ? 0 : 1;
	}

	return jumpLength;
}

module.exports = avoidObstacles;
