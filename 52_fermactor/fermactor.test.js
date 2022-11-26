const fermactor = require('./fermactor');

test('for n=15 should return [4, 1]', () => {
	const result = fermactor(15);
	expect(result).toEqual([4, 1]);
});

test('for n=21 should return [5, 2]', () => {
	const result = fermactor(21);
	expect(result).toEqual([5, 2]);
});

test('for n=95 should return [12, 7]', () => {
	const result = fermactor(95);
	expect(result).toEqual([12, 7]);
});
