function palindromeRearranging(str) {
	const charMap = {};
	let oddCount = 0;

	for (let i = 0; i < str.length; i++) {
		if (!charMap[str[i]]) charMap[str[i]] = 0;
		charMap[str[i]]++;
	}

	for (const key in charMap) {
		if (charMap[key] % 2 !== 0) oddCount++;
		if (oddCount >= 2) return false;
	}

	return true;
}

module.exports = palindromeRearranging;
