'use strict';

var has = require('has');

module.exports = function (push, t) {
	t.test('works on arrays', function (st) {
		var arr = [];
		var result = push(arr, undefined);
		st.equal(result, 1);
		st.equal(arr.length, 1);
		st.ok(has(arr, 0));
		st.equal(arr[0], undefined);

		st.end();
	});

	t.test('is generic', function (st) {
		var obj = {};
		var result = push(obj, undefined);
		st.equal(result, 1);
		st.equal(obj.length, 1);
		st.ok(has(obj, 0));
		st.equal(obj[0], undefined);

		st.end();
	});
};
