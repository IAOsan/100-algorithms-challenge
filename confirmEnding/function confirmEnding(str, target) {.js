function confirmEnding(str, target) {
	const word = str.split(' ').join('');
	const targetLength = target.length;

	return word.slice(-targetLength) === target;
}

console.log(confirmEnding('Abstraction', 'action'));
console.log(confirmEnding('Open sesame', 'pen'));
