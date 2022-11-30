function incorrectPasswordAttempts(passcode, attempts) {
	const attemptsToLock = 10;

	for (let i = 0; i < attempts.length; i++) {
		if (i + 1 < attemptsToLock && attempts[i] === passcode) {
			return true;
		} else {
			return false;
		}
	}

	return false;
}

module.exports = incorrectPasswordAttempts;
