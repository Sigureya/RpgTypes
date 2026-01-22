import type { Terms_Basic, Terms_BasicArray } from "./basic/types";
import type { Terms_CommandArray, Terms_GameCommands } from "./commands/types";
import type { Terms_Messages } from "./messages/types";
import type {
  SystemLabels_TermsParamNames,
  Terms_ParamNamesArray,
} from "./paramArray/types";

export interface System_Terms {
  messages: Terms_Messages;
  commands: Terms_CommandArray;
  params: Terms_ParamNamesArray;
  basic: Terms_BasicArray;
}

export interface System_TextBundle extends System_Terms_Params {
  terms: System_Terms;
  gameTitle: string;
  currencyUnit: string;
}

export interface System_Terms_Params {
  terms: {
    params: Terms_ParamNamesArray;
  };
}

export interface System_TermsPartial {
  messages?: Partial<Terms_Messages>;
  commands?: Partial<Terms_GameCommands>;
  params?: Partial<SystemLabels_TermsParamNames>;
  basic?: Partial<Terms_Basic>;
}
