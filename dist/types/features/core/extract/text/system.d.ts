import { Data_System, SystemLabels_TermsParamNames, Terms_Basic, Terms_GameCommands, Terms_Messages } from '../../../../rmmz/system';
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
export declare const extractTextFromSystem: (system: Data_System) => ExtractedSystemTexts;
