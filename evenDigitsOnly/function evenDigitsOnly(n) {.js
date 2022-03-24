function evenDigitsOnly(n) {
	const allNumbers = n.toString().split('');

	return allNumbers.every((number) => number % 2 === 0);
}
// function evenDigitsOnly(n) {
// 	const allNumbers = n.toString().split('');

// 	for (let i = 0; i < allNumbers.length; i++) {
// 		if (parseInt(allNumbers[i]) % 2 > 0) return false;
// 	}

// 	return true;
// }

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));
