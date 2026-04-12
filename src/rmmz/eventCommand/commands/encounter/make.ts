import { CHANGE_ENCOUNTER } from "@RpgTypes/libs/eventCommand";
import type { Command_ChangeEncounter } from "./types";

type EncounterValue = Command_ChangeEncounter["parameters"][0];

export const makeCommandChangeEncounter = (
  value: EncounterValue,
  indent: number = 0,
): Command_ChangeEncounter => ({
  code: CHANGE_ENCOUNTER,
  indent,
  parameters: [value],
});

export const makeCommandEnableEncounter = (
  indent: number = 0,
): Command_ChangeEncounter => makeCommandChangeEncounter(0, indent);

export const makeCommandDisableEncounter = (
  indent: number = 0,
): Command_ChangeEncounter => makeCommandChangeEncounter(1, indent);
