function centuryFromYear(year) {
	const century = 99;
	return Math.floor((year + century) / (century + 1));
}

module.exports = centuryFromYear;
