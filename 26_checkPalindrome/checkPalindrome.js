function checkPalindrome(string) {
	const normalizedStr = string.toLowerCase();
	const reversedStr = normalizedStr.split('').reverse().join('');
	return normalizedStr === reversedStr;
}

module.exports = checkPalindrome;
