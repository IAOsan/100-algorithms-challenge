function growingPlant(upSpeed, downSpeed, desiredHeight) {
	let days = 1;
	let currentHeight = 0;

	while (currentHeight < desiredHeight) {
		if (days === 1) currentHeight += upSpeed;
		currentHeight += upSpeed - downSpeed;
		days++;
	}

	return days;
}

console.log(growingPlant(100, 10, 910));
