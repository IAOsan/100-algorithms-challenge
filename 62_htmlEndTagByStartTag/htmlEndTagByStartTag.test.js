const htmlEndTagByStartTag = require('./htmlEndTagByStartTag');

test('for input "<button type="button" disabled>" should return "</button>"', () => {
	const result = htmlEndTagByStartTag('<button type="button" disabled>');
	expect(result).toBe('</button>');
});

test('for input "<i>" should return "</i>"', () => {
	const result = htmlEndTagByStartTag('<i>');
	expect(result).toBe('</i>');
});
