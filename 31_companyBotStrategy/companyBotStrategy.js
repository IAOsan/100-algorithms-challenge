function companyBotStrategy(data) {
	let count = 0,
		totalAnswered = 0;

	for (let i = 0; i < data.length; i++) {
		const [time, correctness] = data[i];
		if (correctness === 1) {
			count += time;
			totalAnswered++;
		}
	}

	return !count && !totalAnswered ? 0 : count / totalAnswered;
}

module.exports = companyBotStrategy;
