import type { RuntimeDictionaryData } from "@RpgTypes/features";
import validateDictionary from "./dictionary/dictionaryValidate";

export const isRuntimeDictionary = (
  value: unknown,
): value is RuntimeDictionaryData<string> => {
  return validateDictionary(value);
};
