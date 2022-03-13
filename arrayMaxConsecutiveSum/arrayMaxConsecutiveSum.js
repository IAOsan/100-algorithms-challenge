function arrayMaxConsecutiveSum(arr, k) {
	let largestSum = 0;

	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] >= k && arr[i] + arr[i + 1] > largestSum)
			largestSum = arr[i] + arr[i + 1];
	}

	return largestSum;
}
// function arrayMaxConsecutiveSum(arr, k, index, acc) {
// 	const lastElement = arr.length - 1;
// 	let largestSum = acc;

// 	if (index === lastElement) return largestSum;

// 	if (arr[index] >= k) {
// 		largestSum = arr[index] + arr[index+1] > largestSum ? arr[index] + arr[index+1]:largestSum;
// 	}

// 	return arrayMaxConsecutiveSum(arr,k,index+=1,largestSum);
// }

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));
// console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6],2,0, 0));
