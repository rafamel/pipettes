import { combine } from '~/combine';

describe(`sync`, () => {
  test(`works w/ 1 function`, () => {
    const fn = combine((value: string) => value + 'bar');

    expect(fn('foo')).toEqual(['foobar']);
  });
  test(`works w/ a number of functions`, () => {
    const fn = combine<string, string>(
      (value) => value,
      (value) => value + 'bar',
      (value) => value + 'baz',
      (value) => value + 'barbaz'
    );

    expect(fn('foo')).toEqual(['foo', 'foobar', 'foobaz', 'foobarbaz']);
  });
  test(`works w/ intermediary undefined values`, () => {
    const fn = combine<string, string>(
      (value) => value,
      undefined,
      (value) => value + 'bar',
      undefined,
      undefined,
      (value) => value + 'baz',
      (value) => value + 'barbaz',
      undefined
    );

    expect(fn('foo')).toEqual(['foo', 'foobar', 'foobaz', 'foobarbaz']);
  });
});

describe(`async`, () => {
  test(`returns a promise`, () => {
    const fn = combine.async(() => null);

    expect(fn()).toBeInstanceOf(Promise);
  });
  test(`works w/ 1 sync function`, async () => {
    const fn = combine.async((value: string) => value + 'bar');

    await expect(fn('foo')).resolves.toEqual(['foobar']);
  });
  test(`works w/ 1 async function`, async () => {
    const fn = combine.async(async (value: string) => value + 'bar');

    await expect(fn('foo')).resolves.toEqual(['foobar']);
  });
  test(`works w/ a number of functions`, async () => {
    const fn = combine.async<string, string>(
      (value) => value,
      async (value) => value + 'bar',
      (value) => value + 'baz',
      async (value) => value + 'barbaz'
    );

    await expect(fn('foo')).resolves.toEqual([
      'foo',
      'foobar',
      'foobaz',
      'foobarbaz'
    ]);
  });
  test(`works w/ intermediary undefined values`, async () => {
    const fn = combine.async<string, string>(
      (value) => value,
      undefined,
      async (value) => value + 'bar',
      undefined,
      undefined,
      (value) => value + 'baz',
      async (value) => value + 'barbaz',
      undefined
    );

    await expect(fn('foo')).resolves.toEqual([
      'foo',
      'foobar',
      'foobaz',
      'foobarbaz'
    ]);
  });
});
