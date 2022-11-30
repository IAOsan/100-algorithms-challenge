const incrementalBackups = require('./incrementalBackups');

test('for lastBackupTime=461620205 and changes=[ [461620203, 1], [461620204, 2], [461620205, 6], [461620206, 5], [461620207, 3], [461620207, 5], [461620208, 1] ] should return [1, 3, 5]', () => {
	const result = incrementalBackups(461620205, [
		[461620203, 1],
		[461620204, 2],
		[461620205, 6],
		[461620206, 5],
		[461620207, 3],
		[461620207, 5],
		[461620208, 1],
	]);
	expect(result).toEqual([1, 3, 5]);
});
