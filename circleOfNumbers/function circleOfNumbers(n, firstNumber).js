function circleOfNumbers(n, firstNumber) {
	const circleStart = 0;
	const circleEnd = n - 1;
	const mid = Math.ceil(circleEnd / 2);
	const opposite =
		firstNumber > mid ? Math.abs(mid - firstNumber) : mid + firstNumber;

	return opposite === n ? circleStart : opposite;
}

console.log(circleOfNumbers(10, 2));
