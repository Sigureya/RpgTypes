import type { EventCommand, EventCode } from "src/rpg";

export type ExtractCommandByParam<
  P extends unknown[],
  Commands = EventCommand
> = Extract<Commands, { parameters: P }>;

export type ExtractCommandByCode<
  C extends number,
  Commands = EventCommand
> = Extract<Commands, { code: C }>;

export type CommandParamaterType<Code extends EventCode> =
  ExtractCommandByCode<Code>["parameters"];

/**
 * @deprecated Use `ExtractCommandByParam` instead.
 */
export type PickCommandByParam<P extends unknown[]> = ExtractCommandByParam<P>;
