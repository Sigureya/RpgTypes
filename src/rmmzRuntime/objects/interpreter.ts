import type { Rmmz_Interpreter } from "./core/types";

export interface Rmmz_InterpreterConstructor {
  new (depth?: number): Rmmz_Interpreter;
}
