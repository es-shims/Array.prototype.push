'use strict';

require('../auto');

var test = require('tape');
var defineProperties = require('define-properties');
var callBind = require('call-bind');
var hasStrictMode = require('has-strict-mode')();

var isEnumerable = Object.prototype.propertyIsEnumerable;
var functionsHaveNames = require('functions-have-names')();

var runTests = require('./tests');

test('shimmed', function (t) {
	t.equal(Array.prototype.push.length, 1, 'Array#push has a length of 1');
	t.test('Function name', { skip: !functionsHaveNames }, function (st) {
		st.equal(Array.prototype.push.name, 'push', 'Array#push has name "push"');
		st.end();
	});

	t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
		et.equal(false, isEnumerable.call(Array.prototype, 'push'), 'Array#push is not enumerable');
		et.end();
	});

	t.test('bad array/this value', { skip: !hasStrictMode }, function (st) {
		st['throws'](function () { return Array.prototype.push.call(undefined, 'a'); }, TypeError, 'undefined is not an object');
		st['throws'](function () { return Array.prototype.push.call(null, 'a'); }, TypeError, 'null is not an object');
		st.end();
	});

	runTests(callBind(Array.prototype.push), t);

	t.end();
});
