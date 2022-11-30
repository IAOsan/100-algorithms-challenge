function integerToStringOfFixedWidth(number, width) {
	const numberLength = number.toString().length,
		lengthDiff = Math.abs(numberLength - width);
	let generatedString = '';

	if (numberLength >= width) {
		return number.toString().slice(lengthDiff, numberLength);
	}

	for (let i = 0; i < lengthDiff; i++) {
		generatedString += '0';
	}

	return `${generatedString}${number}`;
}

module.exports = integerToStringOfFixedWidth;
