function sortByHeight(arr) {
	const result = [];
	let sortedValues = {},
		sortedValueId = 0;

	for (let i = 0; i < arr.length; i++) {
		const element = arr[i];
		if (element < 0) continue;
		sortedValues[element] = i;
	}

	sortedValues = Object.keys(sortedValues);

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < 0) {
			result.push(arr[i]);
		} else {
			result.push(+sortedValues[sortedValueId]);
			sortedValueId++;
		}
	}

	return result;
}

module.exports = sortByHeight;
