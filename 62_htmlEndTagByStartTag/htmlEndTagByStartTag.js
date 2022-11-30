function htmlEndTagByStartTag(startTag) {
	const openTag = startTag.split(' ')[0];
	let tagName = '';

	for (let i = 0; i < openTag.length; i++) {
		const char = openTag[i];
		if (char === '<' || char === '>') continue;
		tagName += char;
	}

	return `</${tagName}>`;
}

module.exports = htmlEndTagByStartTag;
