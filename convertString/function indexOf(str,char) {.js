// function convertString(s, t) {
// 	const sCharacters = s.split('');
// 	const tCharacters = t.split('');
// 	let r = [];
// 	let indexOf = 0;

// 	for (let i = 0; i < tCharacters.length; i++) {
// 		for (let j = 0 + indexOf; j < sCharacters.length; j++) {
// 			if (sCharacters[j] === tCharacters[i]) {
// 				r.push(sCharacters[j]);
// 				indexOf = j + 1;
// 				break;
// 			}
// 		}
// 	}

// 	return r.join('') === t;
// }

function convertString(s, t) {
	const sCharacters = s.split('');
	let tIndex = 0;
	let word = '';

	for (let i = 0; i < sCharacters.length; i++) {
		if (sCharacters[i] === t[tIndex]) {
			word = ''.concat(word, s[i]);
			tIndex++;

			if (word === t) {
				return true;
			}
		}
	}

	return false;
}
console.log(convertString('ceoydefthf5iyg5h5yts', 'codefights'));
console.log(convertString('addbyca', 'abcd'));
