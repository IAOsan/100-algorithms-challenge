function missingLetters(str) {
	for (let i = 1; i < str.length; i++) {
		const currentCharCode = str.charCodeAt(i);
		const prevCharCode = str.charCodeAt(i - 1);
		const condition = currentCharCode - prevCharCode !== 1;

		if (condition) {
			return String.fromCharCode(prevCharCode + 1);
		}
	}

	return undefined;
}

module.exports = missingLetters;
