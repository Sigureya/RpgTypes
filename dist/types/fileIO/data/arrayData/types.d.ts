import type * as Name from "./constants/index";
export type MainDataFileNames = (typeof Name)[keyof typeof Name];
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
