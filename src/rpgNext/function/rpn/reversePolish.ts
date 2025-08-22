import type { RpnCommand } from "./types";
/* eslint-disable @functional/no-loop-statements */

export const calculateRPN = <T extends Record<string, number>>(
  commands: ReadonlyArray<RpnCommand>,
  variables: T
): number => {
  const stack: number[] = [];
  for (const cmd of commands) {
    switch (cmd.rpn) {
      case "value":
        stack.push(variables[cmd.name] ?? 0);
        break;
      case "add": {
        const b = stack.pop() ?? 0;
        const a = stack.pop() ?? 0;
        stack.push(a + b);
        break;
      }
      case "subtract": {
        const b = stack.pop() ?? 0;
        const a = stack.pop() ?? 0;
        stack.push(a - b);
        break;
      }
      case "multiply": {
        const b = stack.pop() ?? 0;
        const a = stack.pop() ?? 0;
        stack.push(a * b);
        break;
      }
      case "divide": {
        const b = stack.pop() ?? 0;
        const a = stack.pop() ?? 0;
        stack.push(b === 0 ? 0 : a / b);
        break;
      }
    }
  }
  return stack.length > 0 ? stack[stack.length - 1] : 0;
};

export const buildExpr = (commands: ReadonlyArray<RpnCommand>): string => {
  const stack: string[] = [];
  for (const cmd of commands) {
    switch (cmd.rpn) {
      case "value":
        stack.push(cmd.name);
        break;
      case "add": {
        const b = stack.pop() ?? "";
        const a = stack.pop() ?? "";
        stack.push(`${a} + ${b}`);
        break;
      }
      case "subtract": {
        const b = stack.pop() ?? "";
        const a = stack.pop() ?? "";
        stack.push(`${a} - ${b}`);
        break;
      }
      case "multiply": {
        const b = stack.pop() ?? "";
        const a = stack.pop() ?? "";
        stack.push(`${a} * ${b}`);
        break;
      }
      case "divide": {
        const b = stack.pop() ?? "";
        const a = stack.pop() ?? "";
        stack.push(`${a} / ${b}`);
        break;
      }
    }
  }
  return stack.length > 0 ? stack[stack.length - 1] : "";
};
