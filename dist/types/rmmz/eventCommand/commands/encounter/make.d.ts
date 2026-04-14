import { Command_ChangeEncounter } from './types';
type EncounterValue = Command_ChangeEncounter["parameters"][0];
export declare const makeCommandChangeEncounter: (value: EncounterValue, indent?: number) => Command_ChangeEncounter;
export declare const makeCommandEnableEncounter: (indent?: number) => Command_ChangeEncounter;
export declare const makeCommandDisableEncounter: (indent?: number) => Command_ChangeEncounter;
export {};
