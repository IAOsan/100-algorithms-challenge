function squareDigitsSequence(a0) {
	const secuenceMap = new Map();
	let secuenceTime = 1,
		secuenceElement = a0,
		loopCondition = false;

	secuenceMap.set(a0, 0);

	while (!loopCondition) {
		secuenceElement = `${secuenceElement}`
			.split('')
			.reduce((acc, digit) => (acc += digit * digit), 0);
		loopCondition = secuenceMap.has(secuenceElement);
		secuenceMap.set(secuenceElement, secuenceTime);
		secuenceTime++;
	}

	return secuenceTime;
}

module.exports = squareDigitsSequence;
