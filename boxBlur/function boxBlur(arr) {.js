function boxBlur(arr) {
	// const {total,length} = arr.flatMap((row) => row).reduce((acc, number) => {
	// 	acc.total+= number;
	// 	acc.length+= 1;
	// 	return acc;
	// },{total: 0, length: 0})

	// const totals = [Math.floor(total / length)];
	// return [totals];

	let allValues = arr.flatMap((row) => row);

	const total = [
		Math.floor(
			allValues.reduce((acc, n) => {
				acc += n / allValues.length;
				return acc;
			}, 0)
		),
	];

	return [total];
}

console.log(
	boxBlur([
		[1, 1, 1],
		[1, 7, 1],
		[1, 1, 1],
	])
);
