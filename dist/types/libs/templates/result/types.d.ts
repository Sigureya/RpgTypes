export interface Success<T> {
    success: true;
    value: T;
}
export interface Failure<ErrorType = string> {
    success: false;
    error: ErrorType;
}
export type Result<T> = Success<T> | Failure;
export interface PartitionedResult<T, U> {
    success: T[];
    failure: U[];
}
