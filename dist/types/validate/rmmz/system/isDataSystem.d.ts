import { Data_System, Data_SystemTexts } from '../../../rmmz/system';
import { ValidateFunction } from 'ajv';
export declare const validateSystemData: ValidateFunction;
export declare const isDataSystem: (data: unknown) => data is Data_System;
export declare const isDataSystemTexts: (data: unknown) => data is Data_SystemTexts;
