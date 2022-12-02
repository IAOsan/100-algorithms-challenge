function launchSequenceChecker(systemNames, stepNumbers) {
	const mapList = {};

	for (let i = 0; i < systemNames.length; i++) {
		const system = systemNames[i];
		if (!mapList[system]) mapList[system] = [stepNumbers[i]];
		if (mapList[system] > stepNumbers[i]) return false;
	}

	return true;
}

module.exports = launchSequenceChecker;
