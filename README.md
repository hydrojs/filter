[![NPM
version](https://badge.fury.io/js/hydro-filter.png)](http://badge.fury.io/js/hydro-filter)
[![Build Status](https://secure.travis-ci.org/hydrojs/hydro-filter.png)](http://travis-ci.org/hydrojs/hydro-filter)
[![Coverage Status](https://coveralls.io/repos/hydrojs/hydro-filter/badge.png?branch=master)](https://coveralls.io/r/hydrojs/hydro-filter?branch=master)

# hydro-filter

## Synopsis

Abort hydro tests on first failure.

## Usage

Config:

```js
hydro.set({
  plugins: ['hydro-filter'],
  filter: ['foo', 'bar']
});
```

CLI:

```bash
$ hydro --filter foo --filter bar
```

## Installation

#### npm:

```bash
npm install hydro-filter
```

#### component:

```bash
component install hydrojs/hydro-filter
```

#### standalone:

```bash
<script src="hydro-filter.js"></script>
```

## Tests

```bash
$ npm test
```

Coverage:

```bash
$ npm run coverage
```

## License

The MIT License (see LICENSE)
