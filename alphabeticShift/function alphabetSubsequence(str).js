function alphabetSubsequence(str) {
	const characters = str.split('');

	for (let i = 0; i < characters.length; i++) {
		if (str.charCodeAt(i) >= str.charCodeAt(i + 1)) {
			return false;
		}
	}

	return true;
}

console.log(alphabetSubsequence('effg'));
console.log(alphabetSubsequence('cdce'));
console.log(alphabetSubsequence('ace'));
console.log(alphabetSubsequence('bxz'));
console.log(alphabetSubsequence('zab'));
