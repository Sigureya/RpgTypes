import { Terms_BasicArray } from './basic';
import { Terms_CommandArray } from './commands';
import { Terms_Messages } from './messages';
import { Terms_ParamNamesArray } from './paramArray';
export interface System_Terms {
    messages: Terms_Messages;
    commands: Terms_CommandArray;
    params: Terms_ParamNamesArray;
    basic: Terms_BasicArray;
}
