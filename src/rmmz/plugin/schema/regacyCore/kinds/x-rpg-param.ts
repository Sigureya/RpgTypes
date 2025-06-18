export interface X_RmmzParamInput<T, Kind extends string = string> {
  parent?: string | null;
  kind: Kind;
  data: T;
}
