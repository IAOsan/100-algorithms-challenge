function evenDigitsOnly(n) {
	const isEven = (n) => n % 2 === 0;
	return `${n}`.split('').every(isEven);
}

module.exports = evenDigitsOnly;
