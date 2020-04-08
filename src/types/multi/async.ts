import { MaybeAsyncUnaryFunction, ResponseUnaryFunction } from '../types';

export type AsyncMultiPipe<
  T = any,
  I extends T = T,
  Into extends boolean = false
> = <
  In extends I,
  T1 extends T = In,
  T2 extends T = T1,
  T3 extends T = T2,
  T4 extends T = T3,
  T5 extends T = T4,
  T6 extends T = T5,
  T7 extends T = T6,
  T8 extends T = T7,
  T9 extends T = T8,
  T10 extends T = T9,
  T11 extends T = T10,
  T12 extends T = T11,
  T13 extends T = T12,
  T14 extends T = T13,
  T15 extends T = T14,
  T16 extends T = T15,
  T17 extends T = T16,
  T18 extends T = T17,
  T19 extends T = T18,
  T20 extends T = T19,
  T21 extends T = T20,
  T22 extends T = T21,
  T23 extends T = T22,
  T24 extends T = T23,
  T25 extends T = T24,
  T26 extends T = T25,
  T27 extends T = T26,
  T28 extends T = T27,
  T29 extends T = T28,
  T30 extends T = T29,
  T31 extends T = T30,
  T32 extends T = T31,
  T33 extends T = T32,
  T34 extends T = T33,
  T35 extends T = T34,
  T36 extends T = T35,
  T37 extends T = T36,
  T38 extends T = T37,
  T39 extends T = T38,
  T40 extends T = T39,
  T41 extends T = T40,
  T42 extends T = T41,
  T43 extends T = T42,
  T44 extends T = T43,
  T45 extends T = T44,
  T46 extends T = T45,
  T47 extends T = T46,
  T48 extends T = T47,
  T49 extends T = T48,
  T50 extends T = T49,
  Out extends T = T50
>(
  f1: Into extends true ? In : MaybeAsyncUnaryFunction<In, T1>,
  f2?: MaybeAsyncUnaryFunction<T1, T2>,
  f3?: MaybeAsyncUnaryFunction<T2, T3>,
  f4?: MaybeAsyncUnaryFunction<T3, T4>,
  f5?: MaybeAsyncUnaryFunction<T4, T5>,
  f6?: MaybeAsyncUnaryFunction<T5, T6>,
  f7?: MaybeAsyncUnaryFunction<T6, T7>,
  f8?: MaybeAsyncUnaryFunction<T7, T8>,
  f9?: MaybeAsyncUnaryFunction<T8, T9>,
  f10?: MaybeAsyncUnaryFunction<T9, T10>,
  f11?: MaybeAsyncUnaryFunction<T10, T11>,
  f12?: MaybeAsyncUnaryFunction<T11, T12>,
  f13?: MaybeAsyncUnaryFunction<T12, T13>,
  f14?: MaybeAsyncUnaryFunction<T13, T14>,
  f15?: MaybeAsyncUnaryFunction<T14, T15>,
  f16?: MaybeAsyncUnaryFunction<T15, T16>,
  f17?: MaybeAsyncUnaryFunction<T16, T17>,
  f18?: MaybeAsyncUnaryFunction<T17, T18>,
  f19?: MaybeAsyncUnaryFunction<T18, T29>,
  f20?: MaybeAsyncUnaryFunction<T19, T20>,
  f21?: MaybeAsyncUnaryFunction<T20, T21>,
  f22?: MaybeAsyncUnaryFunction<T21, T22>,
  f23?: MaybeAsyncUnaryFunction<T22, T23>,
  f24?: MaybeAsyncUnaryFunction<T23, T24>,
  f25?: MaybeAsyncUnaryFunction<T24, T25>,
  f26?: MaybeAsyncUnaryFunction<T25, T26>,
  f27?: MaybeAsyncUnaryFunction<T26, T27>,
  f28?: MaybeAsyncUnaryFunction<T27, T28>,
  f29?: MaybeAsyncUnaryFunction<T28, T29>,
  f30?: MaybeAsyncUnaryFunction<T29, T30>,
  f31?: MaybeAsyncUnaryFunction<T30, T31>,
  f32?: MaybeAsyncUnaryFunction<T31, T32>,
  f33?: MaybeAsyncUnaryFunction<T32, T33>,
  f34?: MaybeAsyncUnaryFunction<T33, T34>,
  f35?: MaybeAsyncUnaryFunction<T34, T35>,
  f36?: MaybeAsyncUnaryFunction<T35, T36>,
  f37?: MaybeAsyncUnaryFunction<T36, T37>,
  f38?: MaybeAsyncUnaryFunction<T37, T38>,
  f39?: MaybeAsyncUnaryFunction<T38, T39>,
  f40?: MaybeAsyncUnaryFunction<T39, T40>,
  f41?: MaybeAsyncUnaryFunction<T40, T41>,
  f42?: MaybeAsyncUnaryFunction<T41, T42>,
  f43?: MaybeAsyncUnaryFunction<T42, T43>,
  f44?: MaybeAsyncUnaryFunction<T43, T44>,
  f45?: MaybeAsyncUnaryFunction<T44, T45>,
  f46?: MaybeAsyncUnaryFunction<T45, T46>,
  f47?: MaybeAsyncUnaryFunction<T46, T47>,
  f48?: MaybeAsyncUnaryFunction<T47, T48>,
  f49?: MaybeAsyncUnaryFunction<T48, T49>,
  f50?: MaybeAsyncUnaryFunction<T49, Out>
) => Into extends true ? Promise<Out> : ResponseUnaryFunction<In, Promise<Out>>;
