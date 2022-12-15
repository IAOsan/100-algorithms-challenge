function sumAllPrimes(n) {
	let allPrimesCount = 0;

	function factorize(a, b = 2, count = 0) {
		if (a === 1 || count > 1) return count;
		if (a % b === 0) {
			a = a / b;
			count++;
		} else {
			b++;
		}
		return factorize(a, b, count);
	}

	for (let index = 2; index <= n; index++) {
		const divisorsCount = factorize(index);
		const isPrime = divisorsCount === 1;

		if (isPrime) allPrimesCount += index;
	}

	return allPrimesCount;
}

module.exports = sumAllPrimes;
