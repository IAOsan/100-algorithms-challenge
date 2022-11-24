function electionWinners(votes, k) {
	const result = [],
		sortedVotes = votes.sort(),
		maxVotes = sortedVotes[sortedVotes.length - 1];

	if (sortedVotes[0] === maxVotes) return 0;

	for (let i = 1; i < sortedVotes.length; i++) {
		if (result[result.length - 1] === sortedVotes[i]) return 0;
		if (sortedVotes[i] + k > maxVotes) result.push(sortedVotes[i]);
	}

	return result.length;
}

module.exports = electionWinners;
