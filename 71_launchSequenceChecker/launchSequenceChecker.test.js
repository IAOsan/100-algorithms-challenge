const launchSequenceChecker = require('./launchSequenceChecker');

test('for systemNames=["stage_1", "stage_2", "dragon", "stage_1", "stage_2", "dragon"] and stepNumbers=[1, 10, 11, 2, 12, 111] should return true', () => {
	const result = launchSequenceChecker(
		['stage_1', 'stage_2', 'dragon', 'stage_1', 'stage_2', 'dragon'],
		[1, 10, 11, 2, 12, 111]
	);
	expect(result).toBe(true);
});

test('for systemNames=["stage_1", "stage_1", "stage_2", "dragon"] and stepNumbers=[2, 1, 12, 111] should return false', () => {
	const result = launchSequenceChecker(
		['stage_1', 'stage_1', 'stage_2', 'dragon'],
		[2, 1, 12, 111]
	);
	expect(result).toBe(false);
});
