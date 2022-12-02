function longestDigitsPrefix(str) {
	let prefix = '';
	for (let i = 0; i < str.length; i++) {
		if (isNaN(str[i])) return prefix;
		prefix += str[i];
	}
}

module.exports = longestDigitsPrefix;
