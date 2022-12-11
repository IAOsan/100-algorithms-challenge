function seekAndDestroy(initialArr, args) {
	const result = [],
		argsMap = args.reduce((acc, el) => {
			acc[el] = el;
			return acc;
		}, {});

	for (let i = 0; i < initialArr.length; i++) {
		if (!argsMap[initialArr[i]]) result.push(initialArr[i]);
	}

	return result;
}

module.exports = seekAndDestroy;
