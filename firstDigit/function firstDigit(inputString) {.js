function firstDigit(inputString) {
	const strCharacters = inputString.split('');

	for (let i = 0; i < strCharacters.length; i++) {
		const parsedChar = Number(strCharacters[i]);
		if (parsedChar || parsedChar === 0) return parsedChar;
	}

	return null;
}

console.log(firstDigit('var_1__Int'));
console.log(firstDigit('q2q-q'));
console.log(firstDigit('0ss'));
