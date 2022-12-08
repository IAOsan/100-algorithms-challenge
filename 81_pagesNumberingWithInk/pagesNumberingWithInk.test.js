const pagesNumberingWithInk = require('./pagesNumberingWithInk');

test('for current=1 and numberOfDigits=5 ', () => {
	const result = pagesNumberingWithInk(1, 5);
	expect(result).toBe(5);
});

test('for current=21 and numberOfDigits=5 ', () => {
	const result = pagesNumberingWithInk(21, 5);
	expect(result).toBe(22);
});

test('for current=8 and numberOfDigits=4 ', () => {
	const result = pagesNumberingWithInk(8, 4);
	expect(result).toBe(10);
});
