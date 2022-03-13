function cellColor(cell) {
	const [x, y] = cell.toLowerCase();
	const xModule = x.charCodeAt(0) % 2;
	const yModule = y % 2;

	return xModule === yModule ? 1 : 0;
}

function chessBoardCellColor(cell1, cell2) {
	const cell1Color = cellColor(cell1);
	const cell2Color = cellColor(cell2);

	return cell1Color === cell2Color;
}

console.log(chessBoardCellColor('A1', 'C3'));
console.log(chessBoardCellColor('A1', 'H3'));
console.log(chessBoardCellColor('B1', 'F7'));
console.log(chessBoardCellColor('B1', 'E3'));
