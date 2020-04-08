export type UnaryFunction<I, O> = (value: I) => O;

export type MaybeAsyncUnaryFunction<I, O> = (value: I) => Promise<O> | O;

export type AsyncUnaryFunction<I, O> = (value: I) => Promise<O>;

export type ResponseUnaryFunction<I, O> = UnaryFunction<I, O> &
  (void extends I ? () => O : UnaryFunction<I, O>) &
  (undefined extends I ? () => O : UnaryFunction<I, O>);
