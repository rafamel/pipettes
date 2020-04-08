import {
  UnaryFunction,
  MaybeAsyncUnaryFunction,
  ResponseUnaryFunction
} from './types';
import { MultiPipe, AsyncMultiPipe } from './multi';

/* Pipe */
export type Pipe<T = any, I extends T = T> = MultiPipe<T, I, false>;

export type AsyncPipe<T = any, I extends T = T> = AsyncMultiPipe<T, I, false>;

/* Into */
export type Into<T = any, I extends T = T> = MultiPipe<T, I, true>;

export type AsyncInto<T = any, I extends T = T> = AsyncMultiPipe<T, I, true>;

/* Combine */
export type Combine<I = any, O = any> = <In extends I, Out extends O>(
  fn: UnaryFunction<In, Out>,
  ...fns: Array<UnaryFunction<In, Out> | undefined>
) => ResponseUnaryFunction<In, Out[]>;

export type AsyncCombine<I = any, O = any> = <In extends I, Out extends O>(
  fn: MaybeAsyncUnaryFunction<In, Out>,
  ...fns: Array<MaybeAsyncUnaryFunction<In, Out> | undefined>
) => ResponseUnaryFunction<In, Promise<Out[]>>;
