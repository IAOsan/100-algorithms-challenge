function convertString(s, t) {
	let temp = '',
		tIndex = 0;

	for (let i = 0; i < s.length; i++) {
		const sChar = s[i],
			tChar = t[tIndex];

		if (sChar === tChar) {
			temp += sChar;
			tIndex++;
		}

		if (temp === t) return true;
	}
	return false;
}

module.exports = convertString;
