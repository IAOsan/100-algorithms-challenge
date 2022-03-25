function factorializeANumber(n) {
	let temp = 1;

	for (let i = 2; i <= n; i++) {
		temp *= i;
	}

	return temp;
}

console.log(factorializeANumber(5));
console.log(factorializeANumber(10));
