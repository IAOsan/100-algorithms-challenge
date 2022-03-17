function compareIntegers(n1, n2) {
	const number1 = +n1;
	const number2 = +n2;

	return number1 === number2
		? 'equal'
		: number1 < number2
		? 'less'
		: 'greater';
}

console.log(compareIntegers('12', '13'));
console.log(compareIntegers('875', '799'));
console.log(compareIntegers('1000', '1000'));
