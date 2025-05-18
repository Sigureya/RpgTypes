import type {
  EventCommandLike2,
  EventCommandUnknown,
} from "@RpgTypes/eventCommand/frame";

export const cloneParameters = <
  Param extends ReadonlyArray<number | boolean | string>
>(
  param: Param
): Param => {
  return [...param] as unknown as Param;
};

export const cloneEventCommand = <
  Param extends Array<number | boolean | string>
>(
  command: EventCommandLike2<number, Param>
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
  value: EventCommandUnknown
): value is EventCommandLike2<number, (string | number | boolean)[]> => {
  return value.parameters.every(isPrimitive);
};
