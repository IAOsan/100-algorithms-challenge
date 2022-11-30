function largestNumber(n) {
	const maxNumber = 9;
	return parseInt(Array.from({ length: n }, (_, idx) => maxNumber).join(''));
}

module.exports = largestNumber;
