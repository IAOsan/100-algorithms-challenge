function commonCharacterCount(s1, s2) {
	const s1Count = getCharCountList(s1),
		s2Count = getCharCountList(s2);
	let count = 0;

	function getCharCountList(str) {
		return str.split('').reduce((acc, el) => {
			if (!acc[el]) acc[el] = 0;
			acc[el] += 1;
			return acc;
		}, {});
	}

	for (const char in s1Count) {
		if (s2Count[char]) {
			count +=
				s1Count[char] < s2Count[char] ? s1Count[char] : s2Count[char];
		}
	}

	return count;
}

module.exports = commonCharacterCount;
