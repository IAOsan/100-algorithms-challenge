function sortByLength(arr) {
	const lengthMap = {};
	let sortedArr = [];

	for (let i = 0; i < arr.length; i++) {
		const element = arr[i];
		if (!lengthMap[element.length]) lengthMap[element.length] = [];
		lengthMap[element.length].push(element);
	}

	for (const key in lengthMap) {
		sortedArr = sortedArr.concat(lengthMap[key]);
	}

	return sortedArr;
}

module.exports = sortByLength;
