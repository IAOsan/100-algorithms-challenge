function candies(children, candies) {
	const candiesPerChild = Math.floor(candies / children);
	return candiesPerChild * children;
}

module.exports = candies;
