function addTwoDigits(number) {
	const digits = number.toString().split('');
	return digits.reduce((acc, n) => acc + +n, 0);
}

module.exports = addTwoDigits;
