function newNumeralSystem(char) {
	const initCharCode = 'A'.charCodeAt(0),
		targetIndex = Math.abs(initCharCode - char.charCodeAt(0)),
		result = [];

	let aIndex = 0,
		bIndex = targetIndex;

	while (aIndex <= bIndex) {
		const charA = String.fromCharCode(initCharCode + aIndex);
		const charB = String.fromCharCode(initCharCode + bIndex);
		result.push(`${charA} + ${charB}`);
		aIndex++;
		bIndex--;
	}

	return result;
}

module.exports = newNumeralSystem;
