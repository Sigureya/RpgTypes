export interface Success<T> {
  success: true;
  value: T;
}

export interface Failure {
  success: false;
  error: string;
}

export type Result<T> = Success<T> | Failure;
