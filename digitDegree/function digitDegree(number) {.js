function digitDegree(number) {
	let digits = number.toString().split('');
	let newNumber;
	let degree = 0;

	while (digits.length > 1) {
		newNumber = digits.reduce((acc, n) => (acc += Number(n)), 0);
		digits = newNumber.toString().split('');
		degree++;
	}

	return degree;
}

console.log(digitDegree(5));
console.log(digitDegree(100));
console.log(digitDegree(91));
