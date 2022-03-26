function fareEstimator(
	ride_time,
	ride_distance,
	cost_per_minute,
	cost_per_mile
) {
	let fare = [];

	for (let i = 0; i < cost_per_mile.length; i++) {
		fare.push(
			(
				cost_per_minute[i] * ride_time +
				cost_per_mile[i] * ride_distance
			).toFixed(1)
		);
	}

	return fare;
}

const ride_time = 30,
	ride_distance = 7,
	cost_per_minute = [0.2, 0.35, 0.4, 0.45],
	cost_per_mile = [1.1, 1.8, 2.3, 3.5];

console.log(
	fareEstimator(ride_time, ride_distance, cost_per_minute, cost_per_mile)
);
