function reversedStr(str) {
	return str.split('').reverse().join('');
}

function checkPalindrome(str) {
	const lowerCaseStr = str.toLowerCase();

	return lowerCaseStr === reversedStr(lowerCaseStr);
}

console.log(checkPalindrome('abac'));
console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('a'));
