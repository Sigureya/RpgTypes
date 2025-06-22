import type {
  Command_ControlTimer,
  Operation_PlusMinus,
  Paramobject_ControlTimer,
} from "./types";

const TABLE = {
  plus: 0,
  minus: 1,
} as const satisfies Operation_PlusMinus;

export const makeCommandControlTimer = ({
  operation,
  time,
}: Partial<Paramobject_ControlTimer>): Command_ControlTimer => {
  return {
    code: 124,
    indent: 0,
    parameters: [TABLE[operation ?? "plus"] ?? 0, time ?? 0],
  };
};
