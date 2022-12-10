function reflectString(str) {
	const startCharCode = 'a'.charCodeAt(0);
	const endCharCode = 'z'.charCodeAt(0);
	let reflectedStr = '';

	for (let i = 0; i < str.length; i++) {
		const reflectedCharCode =
			endCharCode - Math.abs(startCharCode - str.charCodeAt(i));
		reflectedStr += String.fromCharCode(reflectedCharCode);
	}

	return reflectedStr;
}

module.exports = reflectString;
