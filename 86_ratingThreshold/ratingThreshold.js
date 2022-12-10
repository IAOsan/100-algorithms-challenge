function ratingThreshold(threshold, ratings) {
	for (let i = 0; i < ratings.length; i++) {
		const ratingGroup = ratings[i];
		let ratingCount = 0;

		for (let k = 0; k < (ratingGroup.length - 1) / 2; k++) {
			const left = 0 + k;
			const right = ratingGroup.length - 1 - k;
			if (left !== right) {
				ratingCount += ratingGroup[left];
				ratingCount += ratingGroup[right];
			} else {
				ratingCount += ratingGroup[left];
			}
		}

		if (ratingCount / ratingGroup.length < threshold) return [i];
	}
}

module.exports = ratingThreshold;
