import { ErrorObject, ValidateFunction } from 'ajv';
export type ValidateResult<T> = ValidateFailed | ValidateSuccessed<T>;
export interface ValidateSuccessed<T> {
    data: T;
    ok: true;
    errors: [];
}
export interface ValidateFailed {
    errors: ErrorObject[];
    ok: false;
}
export declare const validateWithErros: <T>(data: unknown, fn: ValidateFunction<T>) => ValidateResult<T>;
