export const onlyNumbers = (arr: any) => {
	return arr.every(element => {
		return !isNaN(element);
	});
}

export const isAscNumArray = (arr) => {
	if (!Array.isArray(arr) || !arr.length) {
		return false;
	}

	if (!onlyNumbers(arr)) {
		return false;
	}

	const length = arr.length;
	if (length <= 1) {
		return false;
	}

	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] > arr[i + 1]) {
			return false;
		}
	}
	return true;
};

