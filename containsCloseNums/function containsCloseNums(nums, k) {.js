function containsCloseNums(nums, k) {
	// en i === j
	// detenerminar
	// diferencia absoluta entre i & j es < == k
	for (let i = 1; i < nums.length; i++) {
		let j = i - 1;
		const diff = Math.abs(nums[j] - nums[i]);

		if (diff > k) return false;
	}

	return true;
}

console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 3));
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2));
