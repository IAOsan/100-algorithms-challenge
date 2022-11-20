function chunkyMonkey(arr, size) {
	// let result = [],
	// 	temp = [];

	// for (let i = 0; i < arr.length; i++) {
	// 	temp.push(arr[i]);
	// 	if ((i + 1) % size === 0 || i === arr.length - 1) {
	// 		result.push(temp);
	// 		temp = [];
	// 	}
	// }

	let result = [];

	while (arr.length) {
		result.push(arr.splice(0, size));
	}

	return result;
}

module.exports = chunkyMonkey;
