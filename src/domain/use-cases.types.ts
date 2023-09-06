export type UseCaseSingleParam<TParam, TResult> = {
  execute: (param: TParam) => TResult;
};

export type UseCaseMultipleParams<TParam, TResult> = {
  execute: (...param: TParam[]) => TResult;
};

export type UseCaseWithoutParams<TResult> = {
  execute: () => TResult;
};
