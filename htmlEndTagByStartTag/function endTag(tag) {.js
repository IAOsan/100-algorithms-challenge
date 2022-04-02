function endTag(tag) {
	const lastChar = tag[tag.length - 1];
	tag = `</${tag.slice(1)}`;

	return lastChar === '>' ? tag : tag + '>';
}

function htmlEndTagByStartTag(startTag) {
	const tagChars = startTag.split(' ');
	// const t = tagChars[0].toString().split('');
	// let endTag = '</'

	// 	for(let i = 1; i < t.length; i++) {
	// 		endTag+= t[i]
	// 	}

	// 	endTag= endTag[endTag.length-1] === '>' ? endTag: endTag+'>';
	// return endTag;
	return endTag(tagChars[0]);
}

console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
console.log(htmlEndTagByStartTag('<i>'));
