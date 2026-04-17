import { makeSystemDataFromMV } from "@RpgTypes/rmmz";
import type {
  TermsOfReadSystemData,
  HandlerOfReadSystemData,
  ReadSystemResult,
} from "./types";

export const FILENAME_SYSTEM = "System.json";

export const readSystemData = async (
  terms: TermsOfReadSystemData,
  fileReadFn: (filename: typeof FILENAME_SYSTEM) => Promise<string>,
  handlers: HandlerOfReadSystemData,
): Promise<ReadSystemResult> => {
  try {
    const content = await fileReadFn(FILENAME_SYSTEM);
    return then(content, terms, handlers);
  } catch {
    return makeErrorResult(terms.fileNotFound);
  }
};

const makeErrorResult = (message: string): ReadSystemResult => ({
  system: null,
  message,
});

const then = (
  json: string,
  terms: TermsOfReadSystemData,
  handlers: HandlerOfReadSystemData,
): ReadSystemResult => {
  try {
    const data = JSON.parse(json);
    return vvv(data, terms, handlers);
  } catch {
    return makeErrorResult(terms.jsonParseError);
  }
};

const vvv = (
  data: unknown,
  terms: TermsOfReadSystemData,
  handlers: HandlerOfReadSystemData,
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
