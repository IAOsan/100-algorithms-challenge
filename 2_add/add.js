function add(...nums) {
	return nums.reduce((acc, n) => acc + n, 0);
}

module.exports = add;
