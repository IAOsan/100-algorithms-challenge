function alphabetSubSequence(string) {
	for (let i = 0; i < string.length - 1; i++) {
		const areEqual = string[i] === string[i + 1],
			isNotAnIncreasingSecuence =
				string.charCodeAt(i) > string.charCodeAt(i + 1);

		if (areEqual || isNotAnIncreasingSecuence) return false;
	}
	return true;
}

module.exports = alphabetSubSequence;
