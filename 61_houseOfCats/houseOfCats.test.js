const houseOfCats = require('./houseOfCats');

test('for 6 should return [1,3]', () => {
	const result = houseOfCats(6);
	expect(result).toEqual([1, 3]);
});

test('for 2 should return [1]', () => {
	const result = houseOfCats(2);
	expect(result).toEqual([1]);
});

test('for 12 should return [2,4,6]', () => {
	const result = houseOfCats(12);
	expect(result).toEqual([2, 4, 6]);
});
