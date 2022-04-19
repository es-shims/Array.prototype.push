'use strict';

var has = require('has');
var supportsDescriptors = require('define-properties').supportsDescriptors;

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

	t.test('test262: set-length-zero-array-length-is-non-writable', { skip: !supportsDescriptors }, function (st) {
		var array = [];
		Object.defineProperty(array, 'length', { writable: false });

		st['throws'](
			function () { array.length = 2; },
			TypeError,
			'precondition: writing to nonwritable property throws'
		);

		st['throws'](
			function () { push(array); },
			TypeError,
			'push throws when length is nonwritable'
		);

		st.notOk(has(array, 0));
		st.equal(array.length, 0);

		st.end();
	});
};
