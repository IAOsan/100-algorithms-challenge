function reverseAString(str) {
	return str
		.split('')
		.map((_, idx) => {
			return str[str.length - 1 - idx];
		})
		.join('');
}

module.exports = reverseAString;
