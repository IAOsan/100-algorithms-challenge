const palindromeRearranging = require('./palindromeRearranging');

// test('for "aabb" should return true', () => {
// 	const result = palindromeRearranging('aabb');
// 	expect(result).toBe(true);
// });

// test('for "aacbb" should return true', () => {
// 	const result = palindromeRearranging('aacbb');
// 	expect(result).toBe(true);
// });

test('for "aacdbb" should return false', () => {
	const result = palindromeRearranging('aacdbb');
	expect(result).toBe(false);
});
