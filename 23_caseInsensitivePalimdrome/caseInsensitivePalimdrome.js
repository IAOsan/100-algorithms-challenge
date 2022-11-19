function caseInsensitivePalimdrome(string) {
	const normalizedString = string.toLowerCase(),
		reversedString = normalizedString.split('').reverse().join('');

	return normalizedString === reversedString;
}

module.exports = caseInsensitivePalimdrome;
