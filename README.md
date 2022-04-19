# array.prototype.push <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

An ES spec-compliant `Array.prototype.push` shim/polyfill/replacement that works as far down as ES3.

This package implements the [es-shim API](https://github.com/es-shims/api) interface. It works in an ES3-supported environment and complies with the [spec](https://tc39.es/ecma262/#sec-array.prototype.push).

Because `Array.prototype.push` depends on a receiver (the “this” value), the main export takes the array to operate on as the first argument.

## Engines where this is needed

Note: this list is not exhaustive.

  - in node/chrome (including node 18): `push` fails to throw on a nonwritable `length` property
  - IE 8 and below, and pre-ES6 engines: `deleteCount` isn't defaulted to `length - start` until ES6
  - Safari 5.0: sometimes it returns `undefined`
  - Safari 7/8: sparse arrays of size 1e5 or greater break
  - Opera 12.15: breaks on small sparse arrays

## Example

```js
var push = require('array.prototype.push');
var assert = require('assert');

var a = [1, 1, 1];
assert.equal(push(a, 1, 2), 5);
assert.deepEqual(a, [1, 1, 1, 1, 2]);
```

```js
var push = require('array.prototype.push');
var assert = require('assert');
/* when Array#push is not present */
delete Array.prototype.push;
var shimmed = push.shim();
assert.equal(shimmed, push.getPolyfill());
assert.equal(shimmed, Array.prototype.push);
var a = [1, 2, 3];
var b = [1, 2, 3];
assert.equal(a.push(1, 2, 3), push(b, 1, 2, 3));
assert.deepEqual(a, b);
```

```js
var push = require('array.prototype.push');
var assert = require('assert');
/* when Array#push is present */
var shimmed = push.shim();
assert.equal(shimmed, Array.prototype.push);
assert.deepEqual([1, 2, 3].push(1, 2, 3), push([1, 2, 3], 1, 2, 3));
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/array.prototype.push
[npm-version-svg]: https://versionbadg.es/es-shims/Array.prototype.push.svg
[deps-svg]: https://david-dm.org/es-shims/Array.prototype.push.svg
[deps-url]: https://david-dm.org/es-shims/Array.prototype.push
[dev-deps-svg]: https://david-dm.org/es-shims/Array.prototype.push/dev-status.svg
[dev-deps-url]: https://david-dm.org/es-shims/Array.prototype.push#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/array.prototype.push.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/array.prototype.push.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/array.prototype.push.svg
[downloads-url]: https://npm-stat.com/charts.html?package=array.prototype.push
[codecov-image]: https://codecov.io/gh/es-shims/Array.prototype.push/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/es-shims/Array.prototype.push/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/es-shims/Array.prototype.push
[actions-url]: https://github.com/es-shims/Array.prototype.push/actions
