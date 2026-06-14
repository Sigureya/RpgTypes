import { SystemTexts } from './core/types';
import { Data_System } from './system';
export declare const extractTextFromSystem: (system: Data_System) => SystemTexts;
export declare const replaceSystemTextEx: (system: Data_System, texts: SystemTexts) => Data_System;
