function fareEstimator(time, distance, cost_per_minute, cost_per_mile) {
	return cost_per_minute.map((costMinute, idx) => {
		const costMile = cost_per_mile[idx],
			fare = costMinute * time + costMile * distance;
		return +fare.toFixed(1);
	});
}

module.exports = fareEstimator;
