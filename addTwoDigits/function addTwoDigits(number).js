function addTwoDigits(number) {
	return number
		.toString()
		.split('')
		.reduce((acc, number) => (acc += parseInt(number)), 0);
}

console.log(addTwoDigits(25));
