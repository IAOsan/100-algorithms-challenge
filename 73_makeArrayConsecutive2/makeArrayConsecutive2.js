function makeArrayConsecutive2(arr) {
	const sortedArr = arr.sort();
	const maxVal = sortedArr[sortedArr.length - 1];
	let idx = 0,
		count = 0;

	for (let i = sortedArr[0]; i <= maxVal; i++) {
		if (i === arr[idx]) {
			idx++;
		} else {
			count++;
		}
	}

	return count;
}

module.exports = makeArrayConsecutive2;
