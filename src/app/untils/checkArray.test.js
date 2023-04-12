const checkArraySorted = require('./checkArray');
test('sort array', () => {
	var a = [20, 21, 45, 89, 89, 90];
	var b = [20, 20, 78, 98, 99, 97];

	var n1 = a.length;
	var n2 = b.length;

	expect(checkArraySorted(a, n1)).toMatch('YES');
});