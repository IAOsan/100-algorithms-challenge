function companyBotStrategy(trainingData) {
	const { n, asnwersTime } = trainingData.reduce(
		(acc, piece) => {
			const [asnwerTime, correctness] = piece;

			if (correctness >= 1) {
				acc.asnwersTime += asnwerTime;
				acc.n += 1;
			}

			return acc;
		},
		{ n: 0, asnwersTime: 0 }
	);

	return asnwersTime / n || 0;
}

// schema ==>  [answerTime, correctness]
// correctness 1 = correct
// correctness -1 = wrong
// correctness 0 = not given
// average of the answer times from aswered correctly

let trainingData = [
	[3, 1],
	[6, 1],
	[4, 1],
	[5, 1],
];
let trainingData2 = [
	[4, 1],
	[4, -1],
	[0, 0],
	[6, 1],
];
let trainingData3 = [
	[4, -1],
	[0, 0],
	[5, -1],
];

console.log(companyBotStrategy(trainingData3));
