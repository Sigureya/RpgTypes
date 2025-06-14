export interface RmmzParamCore_Option<T extends number | string> {
  value: T;
  option: string;
}

export interface RmmzParamCore_Select<T extends number | string> {
  type: "select";
  default: T;
  options: RmmzParamCore_Option<T>[];
}
