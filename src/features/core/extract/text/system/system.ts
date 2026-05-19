import type { Data_System } from "@RpgTypes/rmmz/system";
import {
  makeTermsBasicFromArray,
  makeTermsCommandFromArray,
  makeTermsMessages,
  makeParamNamesFromArray,
} from "@RpgTypes/rmmz/system";
import type { ExtractedSystemTexts } from "./types";

export const extractTextFromSystem = (
  system: Data_System,
): ExtractedSystemTexts => {
  return {
    gameTitle: system.gameTitle,
    currencyUnit: system.currencyUnit,
    equipTypes: [...system.equipTypes],
    armorTypes: [...system.armorTypes],
    weaponTypes: [...system.weaponTypes],
    elements: [...system.elements],
    skillTypes: [...system.skillTypes],
    terms: {
      basic: makeTermsBasicFromArray(system.terms.basic),
      commands: makeTermsCommandFromArray(system.terms.commands),
      messages: makeTermsMessages(system.terms.messages),
      params: makeParamNamesFromArray(system.terms.params),
    },
  };
};
