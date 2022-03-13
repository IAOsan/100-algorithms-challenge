function characterParity(char) {
	const formatedChar = +char;
	let isEven = formatedChar % 2 === 0;

	if (isNaN(formatedChar)) return 'not a digit';

	return isEven ? 'even' : 'odd';
}

console.log(characterParity('5'));
console.log(characterParity('8'));
console.log(characterParity('q'));
