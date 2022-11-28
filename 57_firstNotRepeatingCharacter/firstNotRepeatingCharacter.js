function firstNotRepeatingCharacter(s) {
	let list = {};

	for (let i = 1; i < s.length; i++) {
		const char = s[i];

		if (!list[char]) list[char] = 0;
		list[char]++;
	}

	for (const key in list) {
		if (list[key] === 1) return key;
	}

	return '_';
}

module.exports = firstNotRepeatingCharacter;
