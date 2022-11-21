function compareIntegers(a, b) {
	const parsedA = +a,
		parsedB = +b;

	return parsedA === parsedB
		? 'equal'
		: parsedA < parsedB
		? 'less'
		: 'greater';
}

module.exports = compareIntegers;
