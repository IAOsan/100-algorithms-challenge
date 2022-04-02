function houseOfCats(legs) {
	let p = [];

	while (legs > 0) {
		p.unshift(legs / 2);
		legs -= 2;
		if (legs) {
			p.unshift(legs / 4);
			legs -= 4;
		}
	}

	return p;
}

// console.log(houseOfCats(6));
console.log(houseOfCats(2));
