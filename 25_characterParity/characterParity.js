function characterParity(symbol) {
	if (isNaN(symbol)) return 'not a digit';

	const isEven = +symbol % 2 === 0;
	return isEven ? 'even' : 'odd';
}

module.exports = characterParity;
