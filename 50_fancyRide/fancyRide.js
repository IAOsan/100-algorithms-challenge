function fancyRide(l, fares) {
	const discountAmout = 20;
	const options = ['UberX', 'UberXL', 'UberPlus', 'UberBlack', 'UberSUV'];

	for (let i = options.length - 1; i >= 0; i--) {
		const car = options[i];
		if (l * fares[i] <= discountAmout) return car;
	}
}

module.exports = fancyRide;
