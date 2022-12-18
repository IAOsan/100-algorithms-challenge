const validTime = require('./validTime');

test('for input "13:58" should return true', () => {
	const result = validTime('13:58');
	expect(result).toBe(true);
});

test('for input "25:51" should return false', () => {
	const result = validTime('25:51');
	expect(result).toBe(false);
});

test('for input "02:76" should return false', () => {
	const result = validTime('02:76');
	expect(result).toBe(false);
});
