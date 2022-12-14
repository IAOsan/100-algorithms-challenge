function stringsConstruction(a, b) {
	const charMap = {};
	let times = 0,
		idx = 0,
		condition = true;

	for (let i = 0; i < b.length; i++) {
		if (!charMap[b[i]]) charMap[b[i]] = 0;
		charMap[b[i]]++;
	}

	while (condition) {
		const char = a[idx];
		const isLastChar = idx === a.length - 1;

		if (charMap[char] > 0) {
			charMap[char] = charMap[char] - 1;
			idx = isLastChar ? 0 : idx + 1;
		} else {
			condition = false;
		}
		times += isLastChar ? 1 : 0;
	}

	return times;
}

module.exports = stringsConstruction;
