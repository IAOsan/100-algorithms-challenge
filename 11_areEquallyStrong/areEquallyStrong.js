function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
	const yourTotal = yourLeft + yourRight,
		friendsTotal = friendsLeft + friendsRight;

	return yourTotal === friendsTotal;
}

module.exports = areEquallyStrong;
