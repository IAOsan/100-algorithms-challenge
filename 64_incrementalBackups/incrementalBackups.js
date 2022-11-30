function incrementalBackups(backupTime, changes) {
	const filesChanged = changes.reduce((acc, element) => {
		const [timeStamp, fileId] = element;
		if (timeStamp > backupTime) {
			acc[fileId] = fileId;
		}
		return acc;
	}, {});

	return Object.values(filesChanged);
}

module.exports = incrementalBackups;
