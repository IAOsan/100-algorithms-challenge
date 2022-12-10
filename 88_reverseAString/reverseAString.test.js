const reverseAString = require('./reverseAString');

test('for input "hello" should return "olleh"', () => {
	const result = reverseAString('hello');
	expect(result).toBe('olleh');
});

test('for input "Howdy" should return "ydwoH"', () => {
	const result = reverseAString('Howdy');
	expect(result).toBe('ydwoH');
});
