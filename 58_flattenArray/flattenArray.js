function flattenArray(arr) {
	let result = [];

	function flat(arr) {
		arr.forEach((element) => {
			if (Array.isArray(element)) {
				flat(element);
			} else {
				result.push(element);
			}
		});
	}

	flat(arr);

	return result;
}

module.exports = flattenArray;

('1,2,3,{a:1}');
('{a:1}'); // verify if its object
// 'a' 1 undefined null
