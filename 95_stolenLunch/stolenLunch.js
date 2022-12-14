function stolenLunch(str) {
	const initialCharCode = 'a'.charCodeAt(0);
	let decodedStr = '',
		toNumber = false;

	for (let i = 0; i < str.length; i++) {
		if (str[i - 2] === ':') toNumber = true;

		if (isNaN(parseInt(str[i]))) {
			decodedStr += toNumber
				? Math.abs(initialCharCode - str[i].charCodeAt(0))
				: str[i];
		} else {
			decodedStr += String.fromCharCode(initialCharCode + +str[i]);
		}
	}

	return decodedStr;
}

module.exports = stolenLunch;
