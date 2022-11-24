const electionWinners = require('./electionWinners');

test('for votes=[2, 3, 5, 2] and k=3 should return 2', () => {
	const result = electionWinners([2, 3, 5, 2], 3);
	expect(result).toBe(2);
});

test('for votes=[3,3,3,3] and k=3 should return 0', () => {
	const result = electionWinners([3, 3, 3, 3], 3);
	expect(result).toBe(0);
});

test('for votes=[1,2,4,4] and k=3 should return 0', () => {
	const result = electionWinners([1, 2, 4, 4], 3);
	expect(result).toBe(0);
});
