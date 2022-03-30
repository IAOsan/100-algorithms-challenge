function firstNotRepeatingCharacter(str) {
	const strChars = str.split('');
	let singles = {};
	let duplicates = {};

	for (let i = 0; i < strChars.length; i++) {
		if (!singles[strChars[i]] && !duplicates[strChars[i]]) {
			singles[strChars[i]] = 1;
		} else {
			if (!duplicates[strChars[i]]) duplicates[strChars[i]] = 1;
			if (singles[strChars[i]]) delete singles[strChars[i]];
		}
	}

	return Object.keys(singles)[0] || '_';
}

console.log(firstNotRepeatingCharacter('abacabad'));
console.log(firstNotRepeatingCharacter('abacabaabacaba'));
