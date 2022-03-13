function addBorder(matrix, width = 1) {
	const borderLength = matrix[0].length + width * 2; // suponiendo que todos miden lo mismo
	const border = '*'.repeat(borderLength);

	matrix.forEach((element, index) => {
		matrix[index] = element
			.padStart(element.length + width, '*')
			.padEnd(element.length + width * 2, '*');
	});

	return [].concat(border, matrix, border);
}

const picture = ['abc', 'ded'];

console.log(addBorder(picture, 2));
