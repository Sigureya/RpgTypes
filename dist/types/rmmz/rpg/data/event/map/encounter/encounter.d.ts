import { Encounter } from './types';
export declare const selectEncounters: (encounterList: ReadonlyArray<Encounter>, isEncounterValid: (e: Encounter, index: number, list: ReadonlyArray<Encounter>) => boolean, randomFn: (max: number) => number) => Encounter | null;
