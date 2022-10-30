function almostIncreasingSecuence(secuence) {
	let count = 0;

	for (let i = 0; i < secuence.length; i++) {
		for (let j = 0; j < secuence.length - 1; j++) {
			if (j === i) continue;
			const condition = secuence[j] < secuence[j + 1];
			if (!condition) {
				count++;
				break;
			}
		}
	}

	return count <= 1;
}

module.exports = almostIncreasingSecuence;
