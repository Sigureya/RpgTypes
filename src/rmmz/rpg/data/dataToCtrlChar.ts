import type { Data_System } from "@RpgTypes/rmmz/system";
import type { ControlCharInfo } from "./controlChars";
import { createControlCharFormat } from "./controlChars";
import { CTRL_CHAR_ACTOR, CTRL_CHAR_VARIABLE } from "./controlChars/constants";
import type { Data_Actor } from "./main";

export const createActorControlChars = (
  actors: ReadonlyArray<Data_Actor>
): ControlCharInfo[] => {
  return actors.map<ControlCharInfo>((actor) => ({
    text: actor.name,
    controlChar: createControlCharFormat(CTRL_CHAR_ACTOR, actor.id),
  }));
};

export const createSystemVariableControlChars = (
  system: Pick<Data_System, "variables">
): ControlCharInfo[] => {
  return system.variables
    .map<ControlCharInfo>((name, index) => ({
      text: name || "",
      controlChar: createControlCharFormat(CTRL_CHAR_VARIABLE, index),
    }))
    .filter((pair) => pair.text !== "");
};
