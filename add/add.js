function add(...numbers) {
	return numbers.reduce((acc, num) => acc + num, 0);
	// let acc = 0;
	// numbers.forEach((n) => (acc += n));
	// return acc
}

console.log(add(5, 5, 5));
