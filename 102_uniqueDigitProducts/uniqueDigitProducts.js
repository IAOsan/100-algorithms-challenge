function uniqueDigitProducts(arr) {
	const products = [];

	for (let i = 0; i < arr.length; i++) {
		const n = `${arr[i]}`;
		let product = +n[0];

		for (let k = 1; k < n.length; k++) {
			product = product * (+n[k] || 1);
		}

		products.push(product);
	}

	return new Set(products).size;
}

module.exports = uniqueDigitProducts;
