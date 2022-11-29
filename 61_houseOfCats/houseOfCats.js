function houseOfCats(legs) {
	const catLegs = 4,
		personLegs = 2;

	let cats = 1,
		result = [];

	while (cats * catLegs <= legs) {
		const remainingLegs = legs - cats * catLegs;
		if (remainingLegs >= personLegs) {
			result.unshift(Math.floor(remainingLegs / personLegs));
		}
		cats++;
	}

	result.push(Math.floor(legs / personLegs));

	return result;
}

module.exports = houseOfCats;
