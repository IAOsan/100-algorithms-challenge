function electionsWinners(votes, k) {
	const sortedVotes = votes.sort((a, b) => a - b);
	const minVotes = sortedVotes[0];
	const maxVotes = sortedVotes[sortedVotes.length - 1];
	let winners = 0;

	sortedVotes.forEach((votesCount) => {
		if (votesCount > minVotes) {
			winners++;
		}
	});

	return winners;
}

console.log(electionsWinners([2, 3, 5, 2], 3));
