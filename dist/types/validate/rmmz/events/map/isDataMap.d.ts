import { ValidateResult } from '../../../../libs/ajv/validateWithErrors';
import { Data_Map } from '../../../../rmmz/rpg';
export declare const isDataMap: (data: unknown) => data is Data_Map;
export declare const validateMapWithErrors: (data: unknown) => ValidateResult<Data_Map>;
