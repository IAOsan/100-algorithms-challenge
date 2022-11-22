function containsDuplicates(arr) {
	const keys = {};

	for (let i = 0; i < arr.length; i++) {
		const val = arr[i];
		if (!keys[val]) {
			keys[val] = [i];
		} else {
			return true;
		}
	}

	return false;
}

module.exports = containsDuplicates;
