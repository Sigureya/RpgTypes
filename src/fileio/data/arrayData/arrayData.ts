import type { TermsOfReadArrayData, ReadArrayResult } from "./types";

export const readArrayData = async <T, F extends string>(
  terms: TermsOfReadArrayData,
  filename: F,
  readFileFn: (filename: F) => Promise<string>,
  validateItemFn: (item: unknown) => item is T,
): Promise<ReadArrayResult<T>> => {
  return readFileFn(filename)
    .then((json) => parseArrayJson(json, filename, terms, validateItemFn))
    .catch(
      (): ReadArrayResult<T> => ({
        succcess: false,
        fileName: filename,
        data: [],
        error: terms.jsonParseError,
      }),
    );
};

const parseArrayJson = <T>(
  json: string,
  filename: string,
  terms: TermsOfReadArrayData,
  validateItemFn: (item: unknown) => item is T,
): ReadArrayResult<T> => {
  try {
    const data = JSON.parse(json);
    if (!Array.isArray(data)) {
      return {
        succcess: false,
        fileName: filename,
        data: [],
        error: terms.notArray,
      };
    }
    return {
      succcess: true,
      fileName: filename,
      data: data.filter(validateItemFn),
      error: "",
    };
  } catch {
    return {
      succcess: false,
      fileName: filename,
      data: [],
      error: terms.jsonParseError,
    };
  }
};
