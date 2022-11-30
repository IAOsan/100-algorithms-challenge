const incorrectPasswordAttempts = require('./incorrectPasswordAttempts');

test('for passcode="1111" and attempts=["1111", "4444","9999", "3333","8888", "2222","7777", "0000","6666", "7285","5555", "1111"] should return true', () => {
	const result = incorrectPasswordAttempts('1111', [
		'1111',
		'4444',
		'9999',
		'3333',
		'8888',
		'2222',
		'7777',
		'0000',
		'6666',
		'7285',
		'5555',
		'1111',
	]);
	expect(result).toBe(true);
});
