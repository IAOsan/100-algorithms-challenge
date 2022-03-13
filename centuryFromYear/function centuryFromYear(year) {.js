function centuryFromYear(year) {
	const century = 100;
	return Math.floor((year + century - 1) / century);
}

console.log(centuryFromYear(2101));
console.log(centuryFromYear(1700));
