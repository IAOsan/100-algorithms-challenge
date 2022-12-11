function shapeArea(n) {
	const ratio = 4,
		initialArea = 1;
	let growth = ratio,
		area = initialArea,
		wraps = 0;

	while (wraps < n - 1) {
		area += growth;
		growth += ratio;
		wraps++;
	}

	return area;
}

module.exports = shapeArea;
