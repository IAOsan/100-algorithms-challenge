function confirmEnding(string, target) {
	const endOfStr = string.substring(
		string.length - 1 - (target.length - 1),
		string.length
	);

	return endOfStr === target;
}

module.exports = confirmEnding;
