const findEmailDomain = require('./findEmailDomain');

test('for address="prettyandsimple@example.com" should return "example.com"', () => {
	const result = findEmailDomain('prettyandsimple@example.com');
	expect(result).toBe('example.com');
});

test('for address="<>[]:,;@"!#$%&*+-/=?^_{}| ~.a"@example.org" should return "example.org"', () => {
	const result = findEmailDomain(
		'<>[]:,;@"!#$%&*+-/=?^_{}| ~.a"@example.org'
	);
	expect(result).toBe('example.org');
});
