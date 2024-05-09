export interface MockDataJSON<T extends object = object> {
  path: string;
  data: T;
}
