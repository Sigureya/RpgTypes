import type { TextCommandBody } from "../types/textCommandBody";

export const textFromJoinedBodies = (
  list: ReadonlyArray<Pick<TextCommandBody, "parameters">>
): string => {
  return list
    .map((body) => body.parameters[0].trimEnd())
    .join("\n")
    .trimEnd();
};
