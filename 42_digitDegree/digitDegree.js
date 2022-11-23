function digitDegree(n) {
	let digits = n.toString().split('');
	let times = 0;

	while (digits.length > 1) {
		const sumDigits = digits.reduce((acc, el) => (acc += +el), 0);
		digits = sumDigits.toString().split('');
		times++;
	}

	return times;
}

module.exports = digitDegree;
