const domainType = require('./domainType');

test('for input ["en.wiki.org", "codefights.com", "happy.net", "code.info"] should return ["organization", "commercial", "network", "information"]', () => {
	const expectedResult = [
		'organization',
		'commercial',
		'network',
		'information',
	];
	const result = domainType([
		'en.wiki.org',
		'codefights.com',
		'happy.net',
		'code.info',
	]);

	expect(result).toEqual(expectedResult);
});
