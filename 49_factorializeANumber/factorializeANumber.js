function factorializeANumber(n) {
	let res = 2;

	for (let i = 3; i <= n; i++) {
		res *= i;
	}

	return res;
}

module.exports = factorializeANumber;
