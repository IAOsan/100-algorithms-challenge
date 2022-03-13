function adyacentElementProduct(arr) {
	let largestProduct = arr[0] * arr[1];

	for (let j = 1; j < arr.length - 1; j++) {
		let product = arr[j] * arr[j + 1];
		if (product > largestProduct) largestProduct = product;
	}
	return largestProduct;
}

console.log(adyacentElementProduct([3, 6, -2, -5, 7, 3]));
