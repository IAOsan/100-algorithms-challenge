function findEmailDomain(address) {
	const indexOf = address.lastIndexOf('@');
	return address.slice(indexOf);
}

console.log(findEmailDomain('prettyandsimple@example.com'));
console.log(findEmailDomain('<>[]:,;@"!#$%&*+-/=?^_{}| ~.a"@example.org'));
