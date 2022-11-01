const areEquallyStrong = require('./areEquallyStrong');

test('for input yourLeft= 10, yourRight=15 and friendsLeft = 15, friendsRight = 10 should return true', () => {
	const expectedResult = true;

	const result = areEquallyStrong(10, 15, 15, 10);

	expect(result).toBe(expectedResult);
});

test('for input yourLeft= 15, yourRight=10 and friendsLeft = 15, friendsRight = 10 should return true', () => {
	const expectedResult = true;

	const result = areEquallyStrong(15, 10, 15, 10);

	expect(result).toBe(expectedResult);
});

test('for input yourLeft= 15, yourRight=10 and friendsLeft = 15, friendsRight = 9 should return true', () => {
	const expectedResult = false;

	const result = areEquallyStrong(15, 10, 15, 9);

	expect(result).toBe(expectedResult);
});
