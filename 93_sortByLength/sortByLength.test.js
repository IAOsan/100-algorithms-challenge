const sortByLength = require('./sortByLength');

test('for input ["abc", "", "aaa", "a", "zz"] should return ["", "a", "zz", "abc", "aaa"]', () => {
	const result = sortByLength(['abc', '', 'aaa', 'a', 'zz']);
	expect(result).toEqual(['', 'a', 'zz', 'abc', 'aaa']);
});

// '' abc a aaa zz
// '' a abc zz aaa
// '' a zz abc aaa
