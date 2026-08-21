import { Command_ShowMessageHeader, Data_Actor } from '../../../../../rmmz';
import { FaceData } from './types';
export declare const faceDataFromActor: (actor: Data_Actor) => FaceData;
export declare const faceDataFromMessage: (command: Command_ShowMessageHeader) => FaceData;
