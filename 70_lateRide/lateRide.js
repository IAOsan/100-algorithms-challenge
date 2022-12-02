function lateRide(n) {
	const hours = `${Math.trunc(n / 60)}`;
	const minutes = `${n % 60}`;

	function getDigitCount(numberStr, count = 0) {
		if (!numberStr) return count;
		count += +numberStr[0];
		return getDigitCount(numberStr.slice(1), count);
	}

	return getDigitCount(hours) + getDigitCount(minutes);
}

module.exports = lateRide;
