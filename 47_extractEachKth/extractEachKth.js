function extractEachKth(n, k) {
	return n.filter((el) => el % k !== 0);
}

module.exports = extractEachKth;

// 1 2 3 4 5 6 7 8 9 10
// 1 2 4 5 7 8 10
