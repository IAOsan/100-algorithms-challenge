function alphabeticShift(string) {
	// codes for z:a & Z:A
	const charCodes = {
		122: 97,
		90: 65,
	};
	let newString = '';

	for (let i = 0; i < string.length; i++) {
		const charCode = string.charCodeAt(i);
		const nextCharCode = charCodes[charCode] || charCode + 1;
		newString += String.fromCharCode(nextCharCode);
	}

	return newString;
}

module.exports = alphabeticShift;
