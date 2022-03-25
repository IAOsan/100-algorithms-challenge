function fancyRide(l, fares) {
	const cars = ['UberX', 'UberXL', 'UberPlus', 'UberBlack', 'UberSUV'];
	const off = 20;

	for (let i = fares.length - 1; i > 0; i--) {
		if (fares[i] * l <= off) {
			return cars[i];
		}
	}
}

const l = 30,
	fares = [0.3, 0.5, 0.7, 1, 1.3];

console.log(fancyRide(l, fares));
