import type { Argment } from "./core/argment";
import type { FunctionsTable } from "./core/functions";
import type { EventState } from "./core/state";

export const evaluteArgment = (
  state: EventState,
  args: Argment[],
  table: FunctionsTable
): Record<string, string | number> => {
  const argList = args.map((a): [string, string | number] => {
    if (a.type === "number") {
      return [a.argName, table.callNumber(state, a.functionName, a.arg)];
    }
    if (a.type === "string") {
      return [a.argName, table.callString(state, a.functionName, a.arg)];
    }
    throw new Error(`不明な引数の型です。${a.type}`);
  });
  return Object.fromEntries(argList);
};
