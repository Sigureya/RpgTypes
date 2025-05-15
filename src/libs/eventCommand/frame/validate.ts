import type { EventCommandLike2 } from "./types";

export const isCommandLike = (
  command: unknown
): command is EventCommandLike2<number, unknown[]> => {
  if (!command) {
    return false;
  }
  if (typeof command !== "object") {
    return false;
  }
  if (Object.keys(command).length !== 3) {
    return false;
  }

  return (
    "code" in command &&
    typeof command.code === "number" &&
    "parameters" in command &&
    Array.isArray(command.parameters) &&
    "indent" in command &&
    typeof command.indent === "number"
  );
};
