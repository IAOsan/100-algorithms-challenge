// function differentSymbolsNaive(str) {
// 	let r = [];
// 	const strCharacters = str.split('');

// 	for (let i = 0; i < strCharacters.length; i++) {
// 		if (!r.includes(strCharacters[i])) {
// 			r.push(strCharacters[i])
// 		}
// 	}

// 	return r.length;
// }

// function differentSymbolsNaive(str) {
// 	const charactersCount = str.split('').reduce((acc, char) => {
// 		if (!acc[char]) {
// 			acc[char] = 1;
// 		}
// 		return acc;
// 	}, {})

// 	return Object.keys(charactersCount).length;
// }
function differentSymbolsNaive(str) {
	const strCharacters = str.split('');

	return [...new Set(strCharacters)].length;
}

console.log(differentSymbolsNaive('cabca'));
