function isTandemRepeat(str) {
	const firsthalf = str.slice(0, str.length / 2);
	const secondhalf = str.slice(str.length / 2);
	return firsthalf === secondhalf;
}

module.exports = isTandemRepeat;
