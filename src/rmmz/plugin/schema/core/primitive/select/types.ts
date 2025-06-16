export interface RmmzParamCore_Option<T extends number | string> {
  value: T;
  option: string;
}

export interface RmmzParamCore_Select<T extends number | string> {
  type: "select";
  default: T;
  options: RmmzParamCore_Option<T>[];
}

export interface X_MetaParamCore_Select<T extends number | string> {
  options: RmmzParamCore_Option<T>[];
}
