const isTandemRepeat = require('./isTandemRepeat');

test('for input "tandemtandem" should return true', () => {
	const result = isTandemRepeat('tandemtandem');
	expect(result).toBe(true);
});

test('for input "qqq" should return false', () => {
	const result = isTandemRepeat('qqq');
	expect(result).toBe(false);
});

test('for input "2w2ww" should return false', () => {
	const result = isTandemRepeat('2w2ww');
	expect(result).toBe(false);
});
