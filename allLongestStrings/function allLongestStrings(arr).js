function allLongestStrings(arr) {
	let largeStr = arr[0];

	// search large string
	arr.forEach((str) => {
		if (str.length > largeStr.length) largeStr = str;
	});

	return arr.filter((str) => {
		if (str.length >= largeStr.length) return str;
	});
}

console.log(allLongestStrings(['aba', 'aa', 'ad', 'vcd', 'aba']));
