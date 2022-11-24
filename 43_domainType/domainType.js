function domainType(domains) {
	const labels = {
		com: 'commercial',
		org: 'organization',
		net: 'network',
		info: 'information',
	};

	return domains.map((el) => {
		const splittedDomain = el.split('.');
		return labels[splittedDomain[splittedDomain.length - 1]];
	});
}

module.exports = domainType;
