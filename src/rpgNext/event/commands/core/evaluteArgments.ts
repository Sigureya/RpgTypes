import type { Argment } from "./types/argment";
import type { FunctionsTable } from "./types/functions";
import type { EventState } from "./types/state";

export const evaluteArgments = (
  state: EventState,
  args: ReadonlyArray<Argment>,
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
