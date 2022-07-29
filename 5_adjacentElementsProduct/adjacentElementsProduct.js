function adjacentElementsProduct(arr) {
	let maxProduct = arr[0] * arr[1];

	for (let index = 1; index < arr.length - 1; index++) {
		let product = arr[index] * arr[index + 1];
		if (product > maxProduct) {
			maxProduct = product;
		}
	}
	return maxProduct;
}

module.exports = adjacentElementsProduct;
