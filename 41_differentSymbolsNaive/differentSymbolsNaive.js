function differentSymbolsNaive(str) {
	const listOfChars = {};

	for (let i = 0; i < str.length; i++) {
		if (!listOfChars[str[i]]) listOfChars[str[i]] = i;
	}

	return Object.keys(listOfChars).length;
}

module.exports = differentSymbolsNaive;
