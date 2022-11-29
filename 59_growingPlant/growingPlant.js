function growingPlant(upSpeed, downSpeed, desiredHeight) {
	let initialHeight = 0;
	let days = 0;
	let itIsDay = true;

	while (initialHeight !== desiredHeight) {
		if (!itIsDay) {
			initialHeight -= downSpeed;
		} else {
			initialHeight += upSpeed;
			days++;
		}
		itIsDay = !itIsDay;
	}

	return days;
}

module.exports = growingPlant;
