import { UnaryFn, MaybePromise } from 'type-core';
import { Pipe, AsyncPipe } from './types';

export const pipe = Object.assign(pipeFn as Pipe<any, any>, {
  async: asyncPipe as AsyncPipe<any, any>
});

function pipeFn(...fns: Array<UnaryFn<any, any> | undefined>): any {
  return fns.reduce(
    (acc: UnaryFn<any, any>, fn) => {
      if (!fn) return acc;
      return function(this: any, value: any) {
        return fn.call(this, acc.call(this, value));
      };
    },
    (value: any) => value
  );
}

function asyncPipe(
  ...fns: Array<UnaryFn<any, MaybePromise<any>> | undefined>
): any {
  return fns.reduce(
    (acc: UnaryFn<any, MaybePromise<any>>, fn) => {
      if (!fn) return acc;
      return async function(this: any, value: any) {
        return fn.call(this, await acc.call(this, value));
      };
    },
    async (value: any) => value
  );
}
