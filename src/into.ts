import {
  UnaryFunction,
  MaybeAsyncUnaryFunction,
  Into,
  AsyncInto
} from './types';
import { pipe } from './pipe';

export const into = Object.assign(intoFn as Into<any, any>, {
  async: asyncIntoFn as AsyncInto<any, any>
});

function intoFn(
  this: any,
  value: any,
  ...fns: Array<UnaryFunction<any, any> | undefined>
): any {
  return pipe.apply(this, fns as any)(value);
}

function asyncIntoFn(
  this: any,
  value: any,
  ...fns: Array<MaybeAsyncUnaryFunction<any, any> | undefined>
): any {
  return pipe.async.apply(this, fns as any)(value);
}
