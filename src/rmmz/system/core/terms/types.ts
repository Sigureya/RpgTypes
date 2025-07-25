import type { Terms_Basic } from "./core/basic";
import type { Terms_GameCommands } from "./core/commands";
import type { Terms_Messages } from "./core/messages";
import type {
  SystemLabels_TermsParamNames,
  Terms_ParamNamesArray,
} from "./core/paramArray";
import type { System_Terms } from "./core/types";

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

export interface System_TermsPartial {
  messages?: Partial<Terms_Messages>;
  commands?: Partial<Terms_GameCommands>;
  params?: Partial<SystemLabels_TermsParamNames>;
  basic?: Partial<Terms_Basic>;
}
