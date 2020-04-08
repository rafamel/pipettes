import { pipe } from '~/pipe';

describe(`sync`, () => {
  test(`works w/ 1 function`, () => {
    const fn = pipe((value: string) => value + 'bar');
    expect(fn('foo')).toBe('foobar');
  });
  test(`works w/ a number of functions`, () => {
    const fn = pipe(
      (value: string) => value + 'bar',
      (value) => ({ value }),
      (value) => ({ value: value.value + 'baz' })
    );

    expect(fn('foo')).toEqual({ value: 'foobarbaz' });
  });
  test(`works w/ intermediary undefined values`, () => {
    const fn = pipe(
      (value: string) => value + 'bar',
      undefined,
      (value) => ({ value }),
      undefined,
      undefined,
      (value) => ({ value: value.value + 'baz' }),
      undefined
    );

    expect(fn('foo')).toEqual({ value: 'foobarbaz' });
  });
});

describe(`async`, () => {
  test(`returns a promise`, () => {
    const fn = pipe.async((value: string) => value + 'bar');

    expect(fn('foo')).toBeInstanceOf(Promise);
  });
  test(`works w/ 1 sync function`, async () => {
    const fn = pipe.async((value: string) => value + 'bar');

    await expect(fn('foo')).resolves.toBe('foobar');
  });
  test(`works w/ 1 async function`, async () => {
    const fn = pipe.async(async (value: string) => value + 'bar');

    await expect(fn('foo')).resolves.toBe('foobar');
  });
  test(`works w/ a number of functions`, async () => {
    const fn = pipe.async(
      async (value: string) => value + 'bar',
      (value) => ({ value }),
      async (value) => ({ value: value.value + 'baz' })
    );

    await expect(fn('foo')).resolves.toEqual({ value: 'foobarbaz' });
  });
  test(`works w/ intermediary undefined values`, async () => {
    const fn = pipe.async(
      async (value: string) => value + 'bar',
      undefined,
      (value) => ({ value }),
      undefined,
      undefined,
      async (value) => ({ value: value.value + 'baz' }),
      undefined
    );

    await expect(fn('foo')).resolves.toEqual({ value: 'foobarbaz' });
  });
});
