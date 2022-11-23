function depositProfit(deposit, rate, threshold) {
	let balance = deposit,
		time = 0;
	while (balance < threshold) {
		balance = balance + (balance * rate) / 100;
		time++;
	}
	return time;
}

module.exports = depositProfit;
