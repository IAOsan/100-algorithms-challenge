function maxMultiple(divisor, bound) {
	let n = 1;

	while (n < bound || n % divisor !== 0) {
		n++;
	}

	return n - divisor;
}

module.exports = maxMultiple;
