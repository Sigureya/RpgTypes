import type {
  Data_System,
  SystemLabels_TermsParamNames,
  Terms_Basic,
  Terms_GameCommands,
  Terms_Messages,
} from "@RpgTypes/rmmz/system";
import {
  makeTermsBasicFromArray,
  makeTermsCommandFromArray,
  makeTermsMessages,
  makeParamNamesFromArray,
} from "@RpgTypes/rmmz/system";

export interface ExtractedSystemTexts {
  gameTitle: string;
  currencyUnit: string;
  equipTypes: string[];
  armorTypes: string[];
  weaponTypes: string[];
  terms: {
    basic: Terms_Basic;
    commands: Terms_GameCommands;
    messages: Terms_Messages;
    params: SystemLabels_TermsParamNames;
  };
}

export const extractTextFromSystem = (
  system: Data_System
): ExtractedSystemTexts => {
  return {
    gameTitle: system.gameTitle,
    currencyUnit: system.currencyUnit,
    equipTypes: [...system.equipTypes],
    armorTypes: [...system.armorTypes],
    weaponTypes: [...system.weaponTypes],
    terms: {
      basic: makeTermsBasicFromArray(system.terms.basic),
      commands: makeTermsCommandFromArray(system.terms.commands),
      messages: makeTermsMessages(system.terms.messages),
      params: makeParamNamesFromArray(system.terms.params),
    },
  };
};
