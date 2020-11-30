import { Intersection, NullaryFn, UnaryFn } from 'type-core';

export type PipeOutFn<In, Out> = Intersection<
  UnaryFn<In, Out>,
  void extends In ? NullaryFn<Out> : UnaryFn<In, Out>,
  undefined extends In ? NullaryFn<Out> : UnaryFn<In, Out>
>;
