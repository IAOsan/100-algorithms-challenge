function properNounCorrection(str) {
	const normalizedStr = str.toLowerCase();
	return `${normalizedStr[0].toUpperCase()}${normalizedStr.slice(1)}`;
}

module.exports = properNounCorrection;
