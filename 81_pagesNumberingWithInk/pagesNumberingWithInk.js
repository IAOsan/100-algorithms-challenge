function pagesNumberingWithInk(current, numberOfDigits) {
	let lastNumberPrinted = `${current}`;
	let printedNumbers = lastNumberPrinted.length;

	while (printedNumbers + lastNumberPrinted.length <= numberOfDigits) {
		printedNumbers += lastNumberPrinted.length;
		lastNumberPrinted = `${+lastNumberPrinted + 1}`;
	}

	return +lastNumberPrinted;
}

module.exports = pagesNumberingWithInk;
