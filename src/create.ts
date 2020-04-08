import { Pipe, AsyncPipe } from './types';
import { pipe } from './pipe';

export const create = Object.assign(createFn, {
  async: asyncCreateFn
});

function createFn<T = any, I extends T = T>(): Pipe<T, I> {
  return pipe;
}

function asyncCreateFn<T = any, I extends T = T>(): AsyncPipe<T, I> {
  return pipe.async;
}
