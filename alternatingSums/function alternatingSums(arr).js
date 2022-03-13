function alternatingSums(arr) {
	const totalSum = [0, 0];

	arr.forEach((num, index) => {
		let isEven = index % 2 === 0;

		if (isEven) {
			totalSum[0] += num;
		} else {
			totalSum[1] += num;
		}
	});

	return totalSum;
}

console.log(alternatingSums([50, 60, 60, 45, 70]));
