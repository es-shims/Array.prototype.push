'use strict';

var GetIntrinsic = require('get-intrinsic');

var LengthOfArrayLike = require('es-abstract/2023/LengthOfArrayLike');
var Set = require('es-abstract/2023/Set');
var ToObject = require('es-abstract/2023/ToObject');
var ToString = require('es-abstract/2023/ToString');

var forEach = require('es-abstract/helpers/forEach');

var callBound = require('call-bind/callBound');

var isString = require('is-string');

// Check failure of by-index access of string characters (IE < 9) and failure of `0 in boxedString` (Rhino)
var boxedString = Object('a');
var splitString = boxedString[0] !== 'a' || !(0 in boxedString);

var strSplit = callBound('String.prototype.split');
var $TypeError = GetIntrinsic('%TypeError%');

var MAX_SAFE_INTEGER_MINUS_1 = Math.pow(2, 53) - 1;

/*
 *var pushShim = function push(item) {
 *	var O = ToObject(this);
 *	var n = LengthOfArrayLike(O);
 *	var i = 0;
 *	while (i < arguments.length) {
 *		O[n + i] = arguments[i];
 *		i += 1;
 *	}
 *	O.length = n + i;
 *	return n + i;
 *};
 */

// eslint-disable-next-line no-unused-vars
module.exports = function push(item) {
	var O = ToObject(this); // step 1
	var self = splitString && isString(O) ? strSplit(O, '') : O;
	var len = LengthOfArrayLike(self); // step 2

	var argCount = arguments.length; // step 3
	if ((len + argCount) > MAX_SAFE_INTEGER_MINUS_1) {
		throw new $TypeError('Pushing ' + argCount + ' elements on an array-like of length ' + len + ' is disallowed, as the total surpasses 2**53-1'); // step 4
	}

	forEach(arguments, function (E) {
		Set(O, ToString(len), E, true); // step 5.a
		len += 1; // step 5.b
	});

	Set(O, 'length', len, true); // step 6

	return len; // step 7
};
