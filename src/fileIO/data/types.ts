import type * as Name from "./constants/fileNames";
export type FileNames = (typeof Name)[keyof typeof Name];

export interface TermsOfReadArrayData {
  jsonParseError: string;
  notArray: string;
}

export interface ReadArrayResult<T> {
  succcess: boolean;
  fileName: string;
  data: T[];
  error: string;
}
