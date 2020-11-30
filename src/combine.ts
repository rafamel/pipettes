import { UnaryFn, MaybePromise } from 'type-core';
import { Combine, AsyncCombine } from './types';

export const combine = Object.assign(combineFn as Combine, {
  async: asyncCombineFn as AsyncCombine
});

function combineFn<In, Out>(...fns: Array<UnaryFn<In, Out> | undefined>): any {
  return fns.reduce(
    (acc: UnaryFn<In, Out[]>, fn) => {
      if (!fn) return acc;
      return function(this: any, value: In): Out[] {
        return acc.call(this, value).concat(fn.call(this, value));
      };
    },
    () => []
  );
}

function asyncCombineFn<In, Out>(
  ...fns: Array<UnaryFn<In, MaybePromise<Out>> | undefined>
): any {
  return fns.reduce(
    (acc: UnaryFn<In, Promise<Out[]>>, fn) => {
      if (!fn) return acc;
      return async function(this: any, value: In): Promise<Out[]> {
        return (await acc.call(this, value)).concat(await fn.call(this, value));
      };
    },
    async () => []
  );
}
