function houseNumbersSum(inputArray) {
	let sumHouses = 0;

	for (let i = 0; i < inputArray.length; i++) {
		if (inputArray[i] !== 0) {
			sumHouses += inputArray[i];
		} else {
			return sumHouses;
		}
	}
}

console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]));
