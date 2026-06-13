import { ExtractedSystemTexts } from './core/types';
import { Data_System } from './system';
export declare const extractTextFromSystem: (system: Data_System) => ExtractedSystemTexts;
export declare const replaceSystemTextEx: (system: Data_System, texts: ExtractedSystemTexts) => Data_System;
