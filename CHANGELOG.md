# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [v1.0.6](https://github.com/es-shims/Array.prototype.push/compare/v1.0.5...v1.0.6) - 2024-03-21

### Commits

- [Deps] update `call-bind`, `es-abstract`, `es-errors`, `get-intrinsic`, `has-property-descriptors` [`34b15e8`](https://github.com/es-shims/Array.prototype.push/commit/34b15e8e2970eded2165ecb73f4f299194221449)
- [actions] use reusable workflows [`4235f3e`](https://github.com/es-shims/Array.prototype.push/commit/4235f3e015bee43422a9c4e6309ce4e7814c0193)
- [Refactor] use `es-object-atoms` where possible [`0a86c72`](https://github.com/es-shims/Array.prototype.push/commit/0a86c72bcede4cefc5b356e93e4cb684095f100b)
- [Dev Deps] update `hasown`, `tape` [`b03d509`](https://github.com/es-shims/Array.prototype.push/commit/b03d509f1134c228e998c110e944d9776a880a8e)

## [v1.0.5](https://github.com/es-shims/Array.prototype.push/compare/v1.0.4...v1.0.5) - 2024-02-04

### Commits

- [Deps] update `call-bind`, `define-properties`, `es-abstract`, `get-intrinsic`, `has-property-descriptors` [`2452e36`](https://github.com/es-shims/Array.prototype.push/commit/2452e36fafffe58543286eaab72833a31ec27ea2)
- [Dev Deps] use `hasown` instead of `has` [`e0a838c`](https://github.com/es-shims/Array.prototype.push/commit/e0a838cb36434be818cf73b17b084cdbd3cda6f2)
- [Dev Deps] update `aud`, `npmignore`, `tape` [`2eedd92`](https://github.com/es-shims/Array.prototype.push/commit/2eedd928444dc89a8c73ad15b7369fcab6ecddcc)
- [Refactor] use `es-errors` where possible, so things that only need those do not need `get-intrinsic` [`75f7130`](https://github.com/es-shims/Array.prototype.push/commit/75f7130299df708479b5a9d69f131b6eb7dc47a8)
- [Deps] update `get-intrinsic` [`090fc59`](https://github.com/es-shims/Array.prototype.push/commit/090fc5932b816ab35399ad78f43cf0beb3c0a870)
- [Dev Deps] update `tape` [`c9a9234`](https://github.com/es-shims/Array.prototype.push/commit/c9a9234dcfad214b363ccf12d8542468b7618e40)

## [v1.0.4](https://github.com/es-shims/Array.prototype.push/compare/v1.0.3...v1.0.4) - 2023-08-28

### Commits

- [Deps] update `define-properties`, `es-abstract`, `get-intrinsic` [`5f96f51`](https://github.com/es-shims/Array.prototype.push/commit/5f96f512604f2095519d68db820dc9c1c2fdba7b)
- [Dev Deps] update `@es-shims/api`, `@ljharb/eslint-config`, `aud`, `tape` [`50f84bf`](https://github.com/es-shims/Array.prototype.push/commit/50f84bf06c0e1f50d7e990ee519659f2a2ef335b)
- [actions] fix permissions [`ba2963a`](https://github.com/es-shims/Array.prototype.push/commit/ba2963a13738b14b21b81f4e3c8e8a9feaf8a138)

## [v1.0.3](https://github.com/es-shims/Array.prototype.push/compare/v1.0.2...v1.0.3) - 2022-11-03

### Commits

- [meta] use `npmignore` to autogenerate an npmignore file [`004f2ff`](https://github.com/es-shims/Array.prototype.push/commit/004f2ffb0f8051bd5e0118a6039113840d2312b7)
- [Deps] update `es-abstract`, `get-intrinsic` [`67bf0bc`](https://github.com/es-shims/Array.prototype.push/commit/67bf0bc4a18cc2021af2a3df75c82b909731c4c9)
- [actions] update rebase action to use reusable workflow [`7caf4bc`](https://github.com/es-shims/Array.prototype.push/commit/7caf4bc16a21254d126c37d982cfca3578113132)
- [Dev Deps] update `aud`, `tape` [`2e0eac3`](https://github.com/es-shims/Array.prototype.push/commit/2e0eac309d544a7aafbc2488b860ab974aac581e)
- [readme] include node 19 [`42db116`](https://github.com/es-shims/Array.prototype.push/commit/42db116515c90d2ffbac29018f249d2f156d1189)

## [v1.0.2](https://github.com/es-shims/Array.prototype.push/compare/v1.0.1...v1.0.2) - 2022-04-19

### Commits

- [Fix] proper error when pushing above max array length [`27e2f6c`](https://github.com/es-shims/Array.prototype.push/commit/27e2f6c58c129c5e4f9dcdbef9e352be681e3eb6)
- [Dev Deps] update `functions-have-names` [`63f7ccc`](https://github.com/es-shims/Array.prototype.push/commit/63f7ccc94951dc3574fabb1b86e313ad6c41f97d)

## [v1.0.1](https://github.com/es-shims/Array.prototype.push/compare/v1.0.0...v1.0.1) - 2022-04-19

### Commits

- [Fix] when `length` is nonwritable, `push` must throw [`73afd7c`](https://github.com/es-shims/Array.prototype.push/commit/73afd7c1c93466d6cf1fa8280333044e41c17385)
- [Deps] update `define-properties` [`9113db9`](https://github.com/es-shims/Array.prototype.push/commit/9113db9691475fc9e4b2518c6037ac41adab2105)

## v1.0.0 - 2022-04-19

### Commits

- Initial implementation, tests, readme [`d8cd350`](https://github.com/es-shims/Array.prototype.push/commit/d8cd350b7e0dd00688581e2d4efafb26c0b648c0)
- Initial commit [`0b4ba40`](https://github.com/es-shims/Array.prototype.push/commit/0b4ba40f30a27bcc8fd7435f976782e856b206cc)
- npm init [`815f615`](https://github.com/es-shims/Array.prototype.push/commit/815f61509d60596cceb7b99cc8b39eed8b7cd856)
- Only apps should have lockfiles [`293d48c`](https://github.com/es-shims/Array.prototype.push/commit/293d48c10bef651ebb4b804adc6d6caebb21381c)
