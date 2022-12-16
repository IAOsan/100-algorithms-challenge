function sumOddFibonacciNums(n) {
	const secuence = [1, 1];
	let allOddSum = 2;

	for (let i = secuence.length; i < n; i++) {
		const lastElement = secuence.length,
			prevElSum = secuence[lastElement - 1] + secuence[lastElement - 2];

		if (prevElSum >= n) break;

		allOddSum += prevElSum % 2 !== 0 && prevElSum;
		secuence.push(prevElSum);
	}

	return allOddSum;
}

module.exports = sumOddFibonacciNums;
