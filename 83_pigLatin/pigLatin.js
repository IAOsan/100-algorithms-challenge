function pigLatin(str) {
	const isConsonant = (char) => /[bcdfghjklmnñpqrstvxzwy]/gi.test(char);

	if (isConsonant(str[0])) {
		let generatedStr = str;

		while (isConsonant(generatedStr[0])) {
			generatedStr += generatedStr[0];
			generatedStr = generatedStr.slice(1);
		}

		return `${generatedStr}ay`;
	}

	return `${str}way`;
}

module.exports = pigLatin;
