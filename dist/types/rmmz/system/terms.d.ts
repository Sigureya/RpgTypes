import { Terms_Messages } from './core';
import { SystemTexts } from './core/types';
import { Data_System } from './system';
export declare const replaceSystemTextDictionary: (text: SystemTexts, fn: (text: string) => string | undefined) => SystemTexts;
export declare const extractTextFromSystem: (system: Data_System) => SystemTexts;
export declare const replaceSystemTextData: (system: Data_System, texts: SystemTexts) => Data_System;
export declare const replaceSystemMessages: (messages: Terms_Messages, newTextFn: (text: string) => string) => Terms_Messages;
