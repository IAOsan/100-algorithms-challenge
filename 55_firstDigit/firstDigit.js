function firstDigit(str) {
	return str.split('').find((el) => !isNaN(el));
}

module.exports = firstDigit;
