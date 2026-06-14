import type {
  Terms_Basic,
  Terms_GameCommands,
  Terms_Messages,
  SystemLabels_TermsParamNames,
} from "./terms";

/**
 * @deprecated Use SystemTexts instead. This type is only exported for backward compatibility and will be removed in a future major version.
 */
export type ExtractedSystemTexts = SystemTexts;
export interface SystemTexts {
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
