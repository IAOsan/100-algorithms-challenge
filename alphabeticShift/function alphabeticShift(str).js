function getNextChar(char) {
	const code = char.charCodeAt(0);
	// const ASCIICodes = {
	// 	A: 65,
	// 	Z: 90,
	// 	a: 97,
	// 	z: 122,
	// }
	const codes = {
		65: 'B',
		90: 'A',
		97: 'b',
		122: 'a',
	};
	// // if uppercase
	// if (code >= ASCIICodes.A && code <= ASCIICodes.Z) {
	// 	return String.fromCharCode(code === ASCIICodes.Z ? ASCIICodes.A:code+1)
	// }
	// // if lowercase
	// return String.fromCharCode(code === ASCIICodes.z ? ASCIICodes.a:code+1)
	return codes[code] || String.fromCharCode(code + 1);
}

function alphabeticStrig(str) {
	const letters = str.split('');

	return letters.map((char) => getNextChar(char)).join('');
}

// dsbaz
console.log(alphabeticStrig('hola'));
