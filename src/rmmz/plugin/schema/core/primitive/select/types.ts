export interface RmmzParam_Option<T extends number | string> {
  value: T;
  option: string;
}

export interface RmmzParam_Select<T extends number | string> {
  type: "select";
  default: T;
  options: RmmzParam_Option<T>[];
  desc?: string;
  text?: string;
  parent?: string;
}
