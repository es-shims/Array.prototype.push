'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');

module.exports = function shimArrayPrototypePush() {
	var polyfill = getPolyfill();

	define(
		Array.prototype,
		{ push: polyfill },
		{ push: function () { return Array.prototype.push !== polyfill; } }
	);

	return polyfill;
};
