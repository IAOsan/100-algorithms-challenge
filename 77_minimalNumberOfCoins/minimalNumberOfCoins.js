function minimalNumberOfCoins(coins, price) {
	let totalCoins = 0,
		total = 0,
		index = coins[coins.length - 1];

	while (total !== price) {
		const diff = price - total;
		if (diff >= coins[index]) {
			total += coins[index];
			totalCoins++;
		} else {
			index = index - 1 < 0 ? 0 : index - 1;
		}
	}

	return totalCoins;
}

module.exports = minimalNumberOfCoins;
