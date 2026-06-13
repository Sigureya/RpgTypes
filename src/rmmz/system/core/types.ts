import type {
  Terms_Basic,
  Terms_GameCommands,
  Terms_Messages,
  SystemLabels_TermsParamNames,
} from "./terms";

export interface ExtractedSystemTexts {
  gameTitle: string;
  currencyUnit: string;
  equipTypes: string[];
  armorTypes: string[];
  weaponTypes: string[];
  elements: string[];
  skillTypes: string[];
  terms: {
    basic: Terms_Basic;
    commands: Terms_GameCommands;
    messages: Terms_Messages;
    params: SystemLabels_TermsParamNames;
  };
}
