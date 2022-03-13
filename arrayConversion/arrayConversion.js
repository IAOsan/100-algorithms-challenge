// function arrayConvertion(arr, iteration) {
// 	if (arr.length === 1) return arr[0];

// 	let temp = [];
// 	const isEven = iteration % 2 === 0;

// 	for (let i = 0; i < arr.length; i+=2) {
// 		if(!isEven) {
// 			temp.push(arr[i] + arr[i+1])
// 		}else {
// 			temp.push(arr[i] * arr[i+1])
// 		}
// 	}

// 	return arrayConvertion(temp, iteration+=1)
// }

// console.log(arrayConvertion([1, 2, 3, 4, 5, 6, 7, 8],1));//186

function arrayConvertion(arr) {
	let isOdd = true;
	let tempArr = [].concat(arr);

	const sumProduct = (arr, isOdd) => {
		let temp = [];

		for (let i = 0; i < arr.length; i += 2) {
			if (isOdd) {
				temp.push(arr[i] + arr[i + 1]);
			} else {
				temp.push(arr[i] * arr[i + 1]);
			}
		}

		return temp;
	};

	while (tempArr.length !== 1) {
		tempArr = sumProduct(tempArr, isOdd);
		isOdd = !isOdd;
	}

	return tempArr;
}

console.log(arrayConvertion([1, 2, 3, 4, 5, 6, 7, 8]));
