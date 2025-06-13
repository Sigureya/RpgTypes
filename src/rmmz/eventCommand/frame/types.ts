export interface EventCommandUnknown {
  code: number;
  indent: number;
  parameters: unknown[];
}
/**
 * @deprecated
 * Use `EventCommandUnknown` instead.
 */
export type EventCommandBase = EventCommandUnknown;

export interface EventCommandLike2<
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
