function areEquallyStrong(yourLeft, yourRight, friendLeft, friendRight) {
	const yourStrongestArm = yourLeft > yourRight ? yourLeft : yourRight;
	const yourWeakestArm = yourLeft < yourRight ? yourLeft : yourRight;
	const friendStrongestArm =
		friendLeft > friendRight ? friendLeft : friendRight;
	const friendWeakestArm =
		friendLeft < friendRight ? friendLeft : friendRight;

	return (
		yourStrongestArm === friendStrongestArm &&
		yourWeakestArm === friendWeakestArm
	);
}

console.log(areEquallyStrong(10, 15, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 9));
