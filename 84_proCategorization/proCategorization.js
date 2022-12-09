function proCategorization(pros, preferences) {
	const preferenceMap = {};

	for (let i = 0; i < preferences.length; i++) {
		const proPreferences = preferences[i];
		const pro = pros[i];

		for (let k = 0; k < proPreferences.length - 1 / 2; k++) {
			const left = proPreferences[0 + k];
			const right = proPreferences[proPreferences.length - 1 - k];

			if (!preferenceMap[left]) preferenceMap[left] = [[left], []];
			if (!preferenceMap[right]) preferenceMap[right] = [[right], []];

			preferenceMap[left][1].push(pro);
		}
	}

	return Object.keys(preferenceMap)
		.sort()
		.map((key) => {
			return preferenceMap[key];
		});
}

module.exports = proCategorization;
