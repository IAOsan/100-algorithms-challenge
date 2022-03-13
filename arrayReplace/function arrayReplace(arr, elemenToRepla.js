function arrayReplace(arr, elemenToReplace, substitutionElement) {
	return arr.map((item) =>
		item === elemenToReplace ? substitutionElement : item
	);
}

console.log(arrayReplace([1, 2, 1], 1, 3));
