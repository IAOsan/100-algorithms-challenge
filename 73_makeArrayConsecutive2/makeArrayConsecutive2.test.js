const makeArrayConsecutive2 = require('./makeArrayConsecutive2');

test('for input [6, 2, 3, 8] should return 3', () => {
	const result = makeArrayConsecutive2([6, 2, 3, 8]);
	expect(result).toBe(3);
});
