import { UnaryFn, MaybePromise } from 'type-core';
import { PipeOutFn } from './types';

export type Combine<I = any, O = any> = <In extends I, Out extends O>(
  fn: UnaryFn<In, Out>,
  ...fns: Array<UnaryFn<In, Out> | undefined>
) => PipeOutFn<In, Out[]>;

export type AsyncCombine<I = any, O = any> = <In extends I, Out extends O>(
  fn: UnaryFn<In, MaybePromise<Out>>,
  ...fns: Array<UnaryFn<In, MaybePromise<Out>> | undefined>
) => PipeOutFn<In, Promise<Out[]>>;
