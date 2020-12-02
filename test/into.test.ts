import { Members } from 'type-core';
import { into } from '~/into';

describe(`sync`, () => {
  test(`works wo/ a value`, () => {
    const value = (into as any)();
    expect(value).toBe(undefined);
  });
  test(`works wo/ a function`, () => {
    const value = into('foo');
    expect(value).toBe('foo');
  });
  test(`works w/ 1 function`, () => {
    const value = into('foo', (value: string) => value + 'bar');
    expect(value).toBe('foobar');
  });
  test(`works w/ a number of functions`, () => {
    const value = into(
      'foo',
      (value: string) => value + 'bar',
      (value) => ({ value }),
      (value) => ({ value: value.value + 'baz' })
    );

    expect(value).toEqual({ value: 'foobarbaz' });
  });
  test(`works w/ intermediary undefined values`, () => {
    const value = (into as any)(
      'foo',
      (value: string) => value + 'bar',
      undefined,
      (value: string) => ({ value }),
      undefined,
      undefined,
      (value: Members) => ({ value: value.value + 'baz' }),
      undefined
    );

    expect(value).toEqual({ value: 'foobarbaz' });
  });
});
describe(`async`, () => {
  test(`works wo/ a value`, () => {
    const promise = (into.async as any)();

    expect(promise).toBeInstanceOf(Promise);
    expect(promise).resolves.toBe(undefined);
  });
  test(`returns a promise`, () => {
    const promise = into.async('foo');

    expect(promise).toBeInstanceOf(Promise);
  });
  test(`works wo/ a function`, async () => {
    const promise = into.async('foo');

    await expect(promise).resolves.toBe('foo');
  });
  test(`works w/ 1 sync function`, async () => {
    const promise = into.async('foo', (value: string) => value + 'bar');

    await expect(promise).resolves.toBe('foobar');
  });
  test(`works w/ 1 async function`, async () => {
    const promise = into.async('foo', async (value: string) => value + 'bar');

    await expect(promise).resolves.toBe('foobar');
  });
  test(`works w/ a number of functions`, async () => {
    const promise = into.async(
      'foo',
      async (value: string) => value + 'bar',
      (value) => ({ value }),
      async (value) => ({ value: value.value + 'baz' })
    );

    await expect(promise).resolves.toEqual({ value: 'foobarbaz' });
  });
  test(`works w/ intermediary undefined values`, async () => {
    const promise = (into.async as any)(
      'foo',
      undefined,
      async (value: string) => value + 'bar',
      undefined,
      (value: string) => ({ value }),
      undefined,
      undefined,
      async (value: Members) => ({ value: value.value + 'baz' }),
      undefined
    );

    await expect(promise).resolves.toEqual({ value: 'foobarbaz' });
  });
});
