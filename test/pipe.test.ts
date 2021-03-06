import { Members } from 'type-core';
import { pipe } from '~/pipe';

describe(`sync`, () => {
  test(`works w/ no functions`, () => {
    const fn = (pipe as any)();
    expect(fn('foo')).toBe(undefined);
  });
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
    const fn = (pipe as any)(
      (value: string) => value + 'bar',
      undefined,
      (value: string) => ({ value }),
      undefined,
      undefined,
      (value: Members) => ({ value: value.value + 'baz' }),
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
  test(`works w/ no functions`, () => {
    const fn = (pipe.async as any)();

    expect(fn()).toBeInstanceOf(Promise);
    expect(fn()).resolves.toBe(undefined);
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
    const fn = (pipe.async as any)(
      async (value: string) => value + 'bar',
      undefined,
      (value: string) => ({ value }),
      undefined,
      undefined,
      async (value: Members) => ({ value: value.value + 'baz' }),
      undefined
    );

    await expect(fn('foo')).resolves.toEqual({ value: 'foobarbaz' });
  });
});
