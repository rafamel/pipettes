# pipettes

[![Version](https://img.shields.io/npm/v/pipettes.svg)](https://www.npmjs.com/package/pipettes)
[![Build Status](https://img.shields.io/travis/rafamel/pipettes/master.svg)](https://travis-ci.org/rafamel/pipettes)
[![Coverage](https://img.shields.io/coveralls/rafamel/pipettes/master.svg)](https://coveralls.io/github/rafamel/pipettes)
[![Dependencies](https://img.shields.io/david/rafamel/pipettes.svg)](https://david-dm.org/rafamel/pipettes)
[![Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/pipettes.svg)](https://snyk.io/test/npm/pipettes)
[![License](https://img.shields.io/github/license/rafamel/pipettes.svg)](https://github.com/rafamel/pipettes/blob/master/LICENSE)
[![Types](https://img.shields.io/npm/types/pipettes.svg)](https://www.npmjs.com/package/pipettes)

> Multipurpose pipes.

## Install

[`npm install pipettes`](https://www.npmjs.com/package/pipettes)

## Usage

### `pipe`

Takes unary functions as arguments. Its asynchronous variant can take `Promise` returning unary functions, and will always pass the resolved value to its next, just as a `Promise.then` chain.

```javascript
import { pipe } from 'pipettes';

// Synchronous
const foo = pipe(
  (value: string) => value + 'bar',
  (value) => ({ value }),
  ({ value }) => ({ value: value + 'baz' })
);

foo(); // { value: 'foobarbaz' }

// Asynchronous
const bar = pipe.async(
  async (value: string) => value + 'bar',
  (value) => ({ value }),
  async ({ value }) => ({ value: value + 'baz' })
);

bar(); // Promise<{ value: 'foobarbaz' }>
```

### `into`

Similar to `pipe`, but it will execute the pipe with a value.

```javascript
import { into } from 'pipettes';

// Synchronous
// { value: 'foobarbaz' }
const value = into(
  'foo'
  (value: string) => value + 'bar',
  (value) => ({ value }),
  ({ value }) => ({ value: value + 'baz' })
);

// Asynchronous
// Promise<{ value: 'foobarbaz' }>
const promise = into.async(
  'foo',
  async (value: string) => value + 'bar',
  (value) => ({ value }),
  async ({ value }) => ({ value: value + 'baz' })
);
```

### `combine`

Combines the results of a series of unary functions, receiving the same value as a parameter, and returns them as an array.

```javascript
import { combine } from 'pipettes';

// Synchronous
const foo = combine(
  (value) => value,
  (value) => value + 'bar',
  (value) => value + 'baz',
  (value) => value + 'barbaz'
);

foo(); // ['foo', 'foobar', 'foobaz', 'foobarbaz']

// Asynchronous
const bar = combine.async(
  (value) => value,
  async (value) => value + 'bar',
  (value) => value + 'baz',
  async (value) => value + 'barbaz'
);

bar(); // Promise<['foo', 'foobar', 'foobaz', 'foobarbaz']>
```

### `create`

Constrains the types for a `pipe` and returns it. Only useful within *TypeScript* environments.

Alternatively, the types `Pipe`, `AsyncPipe`, `Into`, `AsyncInto`, `Combine` and `AsyncCombine` can be used for this purpose.

```javascript
import { create } from 'pipettes';

// Synchronous
const foo = create<any, number>();
const bar = foo(
  // `value` must be a number
  (value) => value + 1,
  (value) => `${value} is a number`
);
const value = bar(10); // '11 is a number'

// Asynchronous
const baz = create.async<number, number>();
const foobar = baz(
  // `value` must be a number,
  // as well as all the returned values
  (value) => value + 1,
  async (value) => value + 1
);
const promise = foobar(10); // Promise<12>
```
