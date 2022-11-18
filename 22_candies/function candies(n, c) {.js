function candies(n, c) {
	const candiesForEachChild = Math.floor(c / n);
	return `Each children eat ${candiesForEachChild} candies and left ${
		c - n * candiesForEachChild
	} candies`;
}

console.log(candies(3, 10));
