const seatsInTheater = require('./seatsInTheater');

test('for nCols=16, nRows=11, col=5 and row=3 should return 96', () => {
	const result = seatsInTheater(16, 11, 5, 3);
	expect(result).toBe(96);
});
