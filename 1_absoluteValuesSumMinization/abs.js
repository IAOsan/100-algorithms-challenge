function absoluteValuesSumMinimization(a) {
	const isEven = a.length % 2 === 0;

	return isEven ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)];
}

module.exports = absoluteValuesSumMinimization;
