import { Terms_Basic, Terms_GameCommands, Terms_Messages, SystemLabels_TermsParamNames } from '../../../../../../rmmz';
export interface SystemKinds {
    gameTitle: string;
    currencyUnit: string;
    equipTypes: string;
    armorTypes: string;
    weaponTypes: string;
}
export interface SystemKindHandlers {
    basic: (key: keyof Terms_Basic) => string;
    commands: (key: keyof Terms_GameCommands) => string;
    messages: (key: keyof Terms_Messages) => string;
    params: (key: keyof SystemLabels_TermsParamNames) => string;
}
