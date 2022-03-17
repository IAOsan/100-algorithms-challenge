function commonCharacterCount(str1, str2) {
	const str1Characters = str1.split('');
	const str2Characters = str2.split('');
	let commonCharCount = 0;

	const str1CharList = getCharactersList(str1Characters);
	const str2CharList = getCharactersList(str2Characters);

	Object.keys(str1CharList).forEach((key) => {
		console.log(key, str1CharList[key] || 0, str2CharList[key] || 0);
		if (str1CharList[key] && str2CharList[key]) {
			if (str1CharList[key] < str2CharList[key]) {
				commonCharCount += str1CharList[key];
			} else {
				commonCharCount += str2CharList[key];
			}
		}
	});

	return commonCharCount;
}

function getCharactersList(characters) {
	return characters.reduce((acc, char) => {
		if (!acc[char]) {
			acc[char] = 0;
		}

		acc[char] += 1;
		return acc;
	}, {});
}

console.log(commonCharacterCount('aabcc', 'adcaa'));
