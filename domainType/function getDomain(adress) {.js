function getDomain(adress) {
	const splittedAdress = adress.split('.');
	const indexOfDomain = splittedAdress.length - 1;

	return splittedAdress[indexOfDomain];
}

function domainType(domains) {
	const labels = {
		com: 'commercial',
		org: 'organization',
		net: 'network',
		info: 'information',
	};

	return domains.map((adress) => labels[getDomain(adress)]);
}

const domains = ['en.wiki.org', 'codefights.com', 'happy.net', 'code.info'];
console.log(domainType(domains));
