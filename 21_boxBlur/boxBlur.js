function boxBlur(image) {
	const result = [],
		rowLength = image[0].length,
		columnLength = image.length,
		imageSize = columnLength * rowLength,
		average = image.reduce((acc, row) => {
			row.forEach((element) => {
				acc += element;
			});
			return acc;
		}, 0);

	result.push([Math.floor(average / imageSize)]);
	return result;
}

module.exports = boxBlur;
