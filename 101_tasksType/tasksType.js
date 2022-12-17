function tasksType(deadlines, day) {
	// [today, upcoming, later]
	const tasks = [0, 0, 0];

	for (let i = 0; i < deadlines.length; i++) {
		const element = deadlines[i];

		if (element <= day) {
			tasks[0]++;
			continue;
		}
		if (element >= day + 1 && element <= day + 7) {
			tasks[1]++;
			continue;
		}
		tasks[2]++;
	}

	return tasks;
}

module.exports = tasksType;
