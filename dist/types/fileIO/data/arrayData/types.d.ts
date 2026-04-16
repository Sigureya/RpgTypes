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
