function checkArraySorted(a, n) {
	let stack = [];
	for (let i = 0; i < n; i++) {
		if (stack.length === 0 || a[i] >= stack[stack.length - 1]) {
			stack.push(a[i]);
		}
		else {
			break;
		}
	}

	if (stack.length === n) {
		return 'YES';
	}
	else {
		return 'NO';
	}
}
module.exports = checkArraySorted;