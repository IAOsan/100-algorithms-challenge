function firstDuplicate(a) {
	let list = {},
		minIndex;

	for (let i = 0; i < a.length; i++) {
		const value = a[i];
		if (!list[value]) list[value] = [];
		list[value].push(i);
	}

	for (const key in list) {
		const [a, b] = list[key];
		if (!!a && !!b) {
			minIndex = !minIndex ? b : b < minIndex && b;
		}
	}

	return a[minIndex] || -1;
}

module.exports = firstDuplicate;
