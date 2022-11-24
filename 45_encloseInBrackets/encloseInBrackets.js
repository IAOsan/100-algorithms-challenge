function encloseInBrackets(str) {
	let newStr = '(';

	for (let i = 0; i <= str.length; i++) {
		newStr += str[i] || ')';
	}
	// return `(${str})`;
	return newStr;
}

module.exports = encloseInBrackets;
