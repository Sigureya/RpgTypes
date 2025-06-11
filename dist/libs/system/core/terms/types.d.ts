import { Terms_Basic, Terms_BasicArray } from './basic';
import { Terms_GameCommands, Terms_CommandArray } from './commands';
import { Terms_Messages } from './messages';
import { SystemLabels_TermsParamNames, Terms_ParamNamesArray } from './paramArray';
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
