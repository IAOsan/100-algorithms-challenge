function composeRanges(nums) {
	const ranges = [{ start: nums[0], end: nums[0] }];

	for (let i = 1; i < nums.length; i++) {
		const num = nums[i];
		if (ranges[ranges.length - 1].end + 1 === num) {
			ranges[ranges.length - 1].end = num;
		} else {
			ranges.push({ start: num, end: num });
		}
	}

	for (let i = 0; i < ranges.length; i++) {
		if (ranges[i].start !== ranges[i].end) {
			ranges[i] = `${ranges[i].start}->${ranges[i].end}`;
		} else {
			ranges[i] = `${ranges[i].start}`;
		}
	}

	return ranges;
}

module.exports = composeRanges;
