function reverseString(str) {
	return str.split('').reverse().join('');
}

function isCaseInsensitivePalindrome(str) {
	const strInLowerCase = str.toLowerCase();

	if (strInLowerCase === reverseString(strInLowerCase)) {
		return true;
	}
	return false;
}

console.log(isCaseInsensitivePalindrome('AaBaa'));
