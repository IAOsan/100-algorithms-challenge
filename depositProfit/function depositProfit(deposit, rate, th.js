function depositProfit(deposit, rate, threshold) {
	let yearsCount = 0;
	let balance = deposit;

	while (balance < threshold) {
		balance += (balance * rate) / 100;
		yearsCount++;
	}

	return yearsCount;
}

const deposit = 100,
	rate = 20,
	threshold = 170;

console.log(depositProfit(deposit, rate, threshold));
