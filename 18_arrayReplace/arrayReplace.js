function arrayReplace(arr, elToReplace, substitutionEl) {
	return arr.map((el) => (el === elToReplace ? substitutionEl : el));
}

module.exports = arrayReplace;
