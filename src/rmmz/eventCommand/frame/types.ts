export interface EventCommandUnknown {
  code: number;
  indent: number;
  parameters: unknown[];
}

export interface EventCommandLike<
  Code extends number,
  Param extends unknown[] = unknown[]
> extends EventCommandUnknown {
  code: Code;
  indent: number;
  parameters: Param;
}

export type ReadonlyEventCommand<T extends EventCommandUnknown> = {
  readonly code: T["code"];
  readonly indent: number;
  readonly parameters: Readonly<T["parameters"]>;
};
