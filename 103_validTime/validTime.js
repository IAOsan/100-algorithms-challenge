function validTime(time) {
	const [hours, minutes] = time.split(':');
	const hoursAreValid = +hours >= 0 && +hours <= 24;
	const minutesAreValid = +minutes >= 0 && +minutes < 60;
	return hoursAreValid && minutesAreValid;
}

module.exports = validTime;
