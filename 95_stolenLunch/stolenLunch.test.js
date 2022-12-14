const stolenLunch = require('./stolenLunch');

test("for input 'you'll n4v4r 6u4ss 8t: cdja' should return 'you'll never guess it: 2390'", () => {
	const result = stolenLunch("you'll n4v4r 6u4ss 8t: cdja");
	expect(result).toBe("you'll never guess it: 2390");
});
