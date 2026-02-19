import type {
  EventCommandLike,
  EventCommandUnknown,
} from "@RpgTypes/libs/eventCommand";

export const cloneParameters = <
  Param extends ReadonlyArray<number | boolean | string>,
>(
  param: Param,
): Param => {
  return [...param] as unknown as Param;
};

export const cloneEventCommand = <
  Param extends Array<number | boolean | string>,
>(
  command: EventCommandLike<number, Param>,
) => {
  return {
    code: command.code,
    indent: command.indent,
    parameters: cloneParameters<Param>(command.parameters),
  };
};

const isPrimitive = (value: unknown): value is string | number | boolean =>
  typeof value === "string" ||
  typeof value === "number" ||
  typeof value === "boolean";

export const isCloneableCommand = (
  value: EventCommandUnknown,
): value is EventCommandLike<number, (string | number | boolean)[]> => {
  return value.parameters.every(isPrimitive);
};
