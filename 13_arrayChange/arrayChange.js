function arrayChange(arr) {
	const temp = [...arr],
		lastItemIdx = arr.length - 1;
	let movements = 0,
		isIncrementalSecuence = false;

	while (!isIncrementalSecuence) {
		for (let i = 1; i < temp.length; i++) {
			if (temp[i] <= temp[i - 1]) {
				temp[i] += 1;
				movements++;
			}
		}

		isIncrementalSecuence = temp[lastItemIdx] > temp[lastItemIdx - 1];
	}

	return movements;
}

module.exports = arrayChange;
