import { makeSystemDataFromMV } from "@RpgTypes/rmmz";
import type {
  SystemDataErrorMessages,
  SystemDataReadHandler,
  ReadSystemResult,
} from "./types";

export const FILENAME_SYSTEM = "System.json";

export const readSystemData = async (
  terms: SystemDataErrorMessages,
  fileReadFn: (filename: typeof FILENAME_SYSTEM) => Promise<string>,
  handlers: SystemDataReadHandler,
): Promise<ReadSystemResult> => {
  try {
    const content = await fileReadFn(FILENAME_SYSTEM);
    return parseSystemJson(content, terms, handlers);
  } catch {
    return makeErrorResult(terms.fileNotFound);
  }
};

const makeErrorResult = (message: string): ReadSystemResult => ({
  system: null,
  message,
});

const parseSystemJson = (
  json: string,
  terms: SystemDataErrorMessages,
  handlers: SystemDataReadHandler,
): ReadSystemResult => {
  try {
    const data = JSON.parse(json);
    return validateSystemData(data, terms, handlers);
  } catch {
    return makeErrorResult(terms.jsonParseError);
  }
};

const validateSystemData = (
  data: unknown,
  terms: SystemDataErrorMessages,
  handlers: SystemDataReadHandler,
): ReadSystemResult => {
  try {
    if (handlers.validateSystemMz(data)) {
      return {
        system: data,
        message: "",
      };
    }

    if (handlers.validateSystemMv && handlers.validateSystemMv(data)) {
      return {
        system: makeSystemDataFromMV(data),
        message: terms.mvAsMz,
      };
    }
    return makeErrorResult(terms.invalidStructure);
  } catch {
    return makeErrorResult(terms.validateFunctionError);
  }
};
