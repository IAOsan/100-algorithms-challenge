function arrayConversion(arr) {
	let count = [].concat(arr),
		iterations = 1;

	while (count.length > 1) {
		const temp = [],
			condition = iterations % 2 === 0;
		for (let i = 0; i < count.length; i += 2) {
			if (condition) {
				temp.push(count[i] * count[i + 1]);
			} else {
				temp.push(count[i] + count[i + 1]);
			}
		}
		count = temp;
		iterations++;
	}

	return count;
}

module.exports = arrayConversion;
