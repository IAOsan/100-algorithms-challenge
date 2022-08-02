function allLongestStrings(arr) {
	const largestStr = arr[0];

	for (let i = 1; i < arr.length; i++) {
		if (arr[i].length > largestStr.length) {
			largestStr = arr[i];
		}
	}

	return arr.filter((s) => s.length >= largestStr.length);
}

module.exports = allLongestStrings;
