import { UnaryFn, MaybePromise } from 'type-core';
import { Into, AsyncInto } from './types';
import { pipe } from './pipe';

export const into = Object.assign(intoFn as Into<any, any>, {
  async: asyncIntoFn as AsyncInto<any, any>
});

function intoFn(
  this: any,
  value: any,
  ...fns: Array<UnaryFn<any, any> | undefined>
): any {
  return fns.length ? pipe.apply(this, fns as any)(value) : value;
}

function asyncIntoFn(
  this: any,
  value: any,
  ...fns: Array<UnaryFn<any, MaybePromise<any>> | undefined>
): any {
  return fns.length
    ? pipe.async.apply(this, fns as any)(value)
    : Promise.resolve(value);
}
