import type { Terms_Basic, Terms_BasicArray } from "./basic";
import type { Terms_GameCommands, Terms_CommandArray } from "./commands";
import type { Terms_Messages } from "./messages";
import type {
  SystemLabels_TermsParamNames,
  Terms_ParamNamesArray,
} from "./paramArray";

export interface System_TextBundle extends SystemLabels_TermsParamNames {
  terms: System_Terms;
  gameTitle: string;
  currencyUnit: string;
}

export interface System_Terms_Params {
  terms: {
    params: Terms_ParamNamesArray;
  };
}

export interface System_Terms {
  messages: Terms_Messages;
  commands: Terms_CommandArray;
  params: Terms_ParamNamesArray;
  basic: Terms_BasicArray;
}

export interface System_TermsPartial {
  messages?: Partial<Terms_Messages>;
  commands?: Partial<Terms_GameCommands>;
  params?: Partial<SystemLabels_TermsParamNames>;
  basic?: Partial<Terms_Basic>;
}
