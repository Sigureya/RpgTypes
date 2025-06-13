import { Data_System } from '../../system';
import { ControlCharInfo } from './controlChars';
import { Data_Actor } from './main';
export declare const createActorControlChars: (actors: ReadonlyArray<Data_Actor>) => ControlCharInfo[];
export declare const createSystemVariableControlChars: (system: Pick<Data_System, "variables">) => ControlCharInfo[];
