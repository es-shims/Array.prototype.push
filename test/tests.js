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

	t.test('test262: S15.4.4.7_A2_T2', function (st) {
		function makeObjWithLength(len) {
			return {
				length: len,
				push: function (x) { return push(this, x); }
			};
		}

		st.test('nan', function (s2t) {
			var nan = makeObjWithLength(NaN);
			s2t.equal(
				nan.push(-1),
				1,
				'#1: var nan = {}; nan.length = NaN; nan.push = Array.prototype.push; nan.push(-1) === 1'
			);

			s2t.equal(
				nan.length,
				1,
				'#2: var nan = {}; nan.length = NaN; nan.push = Array.prototype.push; nan.push(-1); nan.length === 1'
			);

			s2t.equal(
				nan['0'],
				-1,
				'#3: var nan = {}; nan.length = NaN; nan.push = Array.prototype.push; nan.push(-1); nan["0"] === -1'
			);

			s2t.end();
		});

		st.test('∞', function (s2t) {
			var inf = makeObjWithLength(Infinity);
			s2t['throws'](
				function () { inf.push(-4); },
				TypeError
			);

			s2t.equal(
				inf.length,
				Infinity,
				'#6: var inf = {}; inf.length = Infinity; inf.push = Array.prototype.push; inf.push(-4); inf.length === Infinity'
			);

			s2t.equal(
				inf[9007199254740991],
				undefined,
				'#6: var inf = {}; inf.length = Infinity; inf.push = Array.prototype.push; inf.push(-4); inf[9007199254740991] === undefined'
			);
			s2t.end();
		});

		st.test('-∞', function (s2t) {
			var ninf = makeObjWithLength(-Infinity);
			s2t.equal(
				ninf.push(-7),
				1,
				'#7: var ninf = {}; ninf.length = -Infinity; ninf.push = Array.prototype.push; ninf.push(-7) === 1'
			);

			s2t.equal(
				ninf.length,
				1,
				'#8: var ninf = {}; ninf.length = -Infinity; ninf.push = Array.prototype.push; ninf.push(-7); ninf.length === 1'
			);

			s2t.equal(
				ninf['0'],
				-7,
				'#9: var ninf = {}; ninf.length = -Infinity; ninf.push = Array.prototype.push; ninf.push(-7); ninf["0"] === -7'
			);
			s2t.end();
		});

		st.test('0.5', function (s2t) {
			var half = makeObjWithLength(0.5);
			s2t.equal(
				half.push(-10),
				1,
				'#10: var half = {}; half.length = 0.5; half.push = Array.prototype.push; half.push(-10) === 1'
			);

			s2t.equal(
				half.length,
				1,
				'#11: var half = {}; half.length = 0.5; half.push = Array.prototype.push; half.push(-10); half.length === 1'
			);

			s2t.equal(
				half['0'],
				-10,
				'#12: var half = {}; half.length = 0.5; half.push = Array.prototype.push; half.push(-10); half["0"] === -10'
			);

			s2t.end();
		});

		st.test('3/2', function (s2t) {
			var threeHalfs = makeObjWithLength(1.5);
			s2t.equal(
				threeHalfs.push(-13),
				2,
				'#13: var threeHalfs = {}; threeHalfs.length = 1.5; threeHalfs.push = Array.prototype.push; threeHalfs.push(-13) === 2'
			);

			s2t.equal(
				threeHalfs.length,
				2,
				'#14: var threeHalfs = {}; threeHalfs.length = 1.5; threeHalfs.push = Array.prototype.push; threeHalfs.push(-13); threeHalfs.length === 2'
			);

			s2t.equal(
				threeHalfs['1'],
				-13,
				'#15: var threeHalfs = {}; threeHalfs.length = 1.5; threeHalfs.push = Array.prototype.push; threeHalfs.push(-13); threeHalfs["1"] === -13'
			);

			s2t.end();
		});

		st.test('boxed 0', function (s2t) {
			var boxedZero = makeObjWithLength(Object(0));
			s2t.equal(
				boxedZero.push(-16),
				1,
				'#16: var boxedZero = {}; boxedZero.length = new Number(0); boxedZero.push = Array.prototype.push; boxedZero.push(-16) === 1'
			);

			s2t.equal(
				boxedZero.length,
				1,
				'#17: var boxedZero = {}; boxedZero.length = new Number(0); boxedZero.push = Array.prototype.push; boxedZero.push(-16); boxedZero.length === 1'
			);

			s2t.equal(
				boxedZero['0'],
				-16,
				'#18: var boxedZero = {}; boxedZero.length = new Number(0); boxedZero.push = Array.prototype.push; boxedZero.push(-16); boxedZero["0"] === -16'
			);

			s2t.end();
		});

		st.end();
	});
};
