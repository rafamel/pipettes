import {
  MaybeAsyncUnaryFunction,
  ResponseUnaryFunction,
  UnaryFunction
} from './types';

export type Combine<I = any, O = any> = <In extends I, Out extends O>(
  fn: UnaryFunction<In, Out>,
  ...fns: Array<UnaryFunction<In, Out> | undefined>
) => ResponseUnaryFunction<In, Out[]>;

export type AsyncCombine<I = any, O = any> = <In extends I, Out extends O>(
  fn: MaybeAsyncUnaryFunction<In, Out>,
  ...fns: Array<MaybeAsyncUnaryFunction<In, Out> | undefined>
) => ResponseUnaryFunction<In, Promise<Out[]>>;
