const proCategorization = require('./proCategorization');

test('for pros=["Jack", "Leon", "Maria"] and preferences=[["Computer repair", "Handyman", "House cleaning"], ["Computer lessons", "Computer repair", "Data recovery service"], ["Computer lessons", "House cleaning"]] should return [ [ ["Computer lessons"], ["Leon", "Maria"]], [ ["Computer repair"], ["Jack", "Leon"]], [ ["Data recovery service"], ["Leon"]], [ ["Handyman"], ["Jack"]], [ ["House cleaning"], ["Jack", "Maria"]]]', () => {
	const result = proCategorization(
		['Jack', 'Leon', 'Maria'],
		[
			['Computer repair', 'Handyman', 'House cleaning'],
			['Computer lessons', 'Computer repair', 'Data recovery service'],
			['Computer lessons', 'House cleaning'],
		]
	);

	expect(result).toEqual([
		[['Computer lessons'], ['Leon', 'Maria']],
		[['Computer repair'], ['Jack', 'Leon']],
		[['Data recovery service'], ['Leon']],
		[['Handyman'], ['Jack']],
		[['House cleaning'], ['Jack', 'Maria']],
	]);
});
