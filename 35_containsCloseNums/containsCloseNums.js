function containsCloseNums(nums, k) {
	let list = {};

	for (let i = 0; i < nums.length; i++) {
		if (!list[nums[i]]) list[nums[i]] = [];
		list[nums[i]].push(i);

		if (list[nums[i]].length > 1) {
			const [a, b] = list[nums[i]];
			return Math.abs(a - b) <= k;
		}
	}

	return false;
}

module.exports = containsCloseNums;
