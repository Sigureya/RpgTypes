export interface EventCommandLike2<Code extends number> {
  code: Code;
  indent: number;
  parameters: unknown[];
}

export interface Converter<
  ParamObject extends {},
  ParamArray extends unknown[]
> {
  fromArray: (array: ParamArray) => ParamObject;
  toArray: (object: ParamObject) => ParamArray;
  makeCommand(
    param?: Partial<ParamObject>,
    indent?: number
  ): EventCommandLike2<number>;
}
