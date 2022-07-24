const addBorder = require('./addBorder');

it('should add a border of asterisks(*) to it', () => {
	const input = ['abc', 'ded'];
	const expectedResult = ['*****', '*abc*', '*ded*', '*****'];

	const result = addBorder(input);

	expect(result).toEqual(expectedResult);
});
