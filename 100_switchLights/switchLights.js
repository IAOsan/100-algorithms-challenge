function switchLights(candles) {
	let itsOn = !!candles[0];

	return candles.map((candle) => {
		itsOn = !itsOn;
		return itsOn ? candle : 0;
	});
}

module.exports = switchLights;
