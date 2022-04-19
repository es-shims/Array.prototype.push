'use strict';

var GetIntrinsic = require('get-intrinsic');

var IsArray = require('es-abstract/2021/IsArray');
var HasOwnProperty = require('es-abstract/2021/HasOwnProperty');

var callBind = require('call-bind');

var $ArrayPrototype = GetIntrinsic('%Array.prototype%');

var implementation = require('./implementation');

var $pushApply = callBind.apply(GetIntrinsic('%Array.prototype.push%'));

module.exports = function getPolyfill() {
	if (!$ArrayPrototype.push) {
		return implementation;
	}

	var pushIsNotGeneric = (function () {
		var obj = {};
		var result = $ArrayPrototype.push.call(obj, undefined);
		return result !== 1 || obj.length !== 1 || typeof obj[0] !== 'undefined' || !HasOwnProperty(obj, '0');
	}());
	if (pushIsNotGeneric) {
		var implApply = callBind.apply(implementation);
		/* eslint-disable no-invalid-this */
		// eslint-disable-next-line no-unused-vars
		return function push(item) {
			if (IsArray(this)) {
				return $pushApply(this, arguments);
			}
			return implApply(this, arguments);
		};
	}

	// This fixes a very weird bug in Opera 10.6 when pushing `undefined`
	var pushUndefinedIsWeird = (function () {
		var arr = [];
		var result = arr.push(undefined);
		return result !== 1 || arr.length !== 1 || typeof arr[0] !== 'undefined' || !HasOwnProperty(arr, '0');
	}());
	if (pushUndefinedIsWeird) {
		return implementation;
	}

	return $ArrayPrototype.push;
};
