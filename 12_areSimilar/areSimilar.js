function areSimilar(a, b) {
	if (a.toString() === b.toString()) return true;

	const aTotals = a.reduce((acc, el) => {
		if (!acc[el]) acc[el] = 0;

		acc[el] += 1;
		return acc;
	}, {});

	const bTotals = b.reduce((acc, el) => {
		if (!acc[el]) acc[el] = 0;

		acc[el] += 1;
		return acc;
	}, {});

	return JSON.stringify(aTotals) === JSON.stringify(bTotals);
}

module.exports = areSimilar;
