import type { ErrorObject, ValidateFunction } from "ajv";

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

export const validateWithErros = <T>(
  data: unknown,
  fn: ValidateFunction<T>,
): ValidateResult<T> => {
  const valid = fn(data);
  if (valid) {
    return {
      errors: [],
      data,
      ok: true,
    };
  }
  return {
    ok: false,
    errors: fn.errors || [],
  };
};
