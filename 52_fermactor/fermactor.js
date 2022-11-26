function fermactor(n) {
	let c = 1,
		d;

	while (!d) {
		const squared_c = Math.pow(c, 2),
			square_root = Math.sqrt(squared_c - n),
			square_root_has_decimals = square_root % 1 !== 0;

		if (!square_root || square_root_has_decimals) {
			c++;
		} else {
			d = square_root;
		}
	}

	return [c, d];
}

module.exports = fermactor;
