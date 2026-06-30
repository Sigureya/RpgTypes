import { SystemDataFragments, SystemTextsFragments } from './systemSegments';
import { Data_System, Data_SystemTexts } from './types';
export declare const makeSystemTexts: (frgments: Partial<SystemTextsFragments>) => Data_SystemTexts;
export declare const makeSystemData: (fragments: Partial<SystemDataFragments>) => Data_System;
