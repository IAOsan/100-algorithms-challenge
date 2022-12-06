function mostFrequentDigitSum(n) {
	const mostFrequentsList = {},
		mostFrequent = [0, 0];
	let secuenceElement;

	function s(x) {
		const [a = 0, b = 0] = x.toString().split('');
		return +a + +b;
	}

	function step(x) {
		return x - s(x);
	}

	while (secuenceElement !== 0) {
		const digitsSum = s(n);
		if (!mostFrequentsList[digitsSum]) mostFrequentsList[digitsSum] = 0;
		mostFrequentsList[digitsSum] += 1;
		secuenceElement = n;
		n = step(n);
	}

	for (const key in mostFrequentsList) {
		if (mostFrequentsList[key] > mostFrequent[1]) {
			mostFrequent[0] = key;
			mostFrequent[1] = mostFrequentsList[key];
		}
	}

	return +mostFrequent[0];
}

module.exports = mostFrequentDigitSum;
